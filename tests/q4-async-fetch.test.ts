import { fetchWithRetry } from "../src/questions/q4-async-fetch";

interface TestData {
  id: number;
  name: string;
}

describe("Question 4: Async Data Fetching", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("should successfully fetch data", async () => {
    const mockData: TestData = { id: 1, name: "Test" };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      status: 200,
      statusText: "OK",
      json: () => Promise.resolve(mockData),
    });

    const result = await fetchWithRetry<TestData>("test-url");
    expect(result.data).toEqual(mockData);
  });

  it("should retry on failure", async () => {
    (global.fetch as jest.Mock)
      .mockRejectedValueOnce(new Error("Network error"))
      .mockResolvedValueOnce({
        ok: true,
        status: 200,
        statusText: "OK",
        json: () => Promise.resolve({ id: 1, name: "Test" }),
      });

    const result = await fetchWithRetry<TestData>("test-url", { retries: 1 });
    expect(result.status).toBe(200);
    expect(global.fetch).toHaveBeenCalledTimes(2);
  });

  it("should timeout after specified duration", async () => {
    const slowResponse = new Promise((resolve) => setTimeout(resolve, 1000));
    (global.fetch as jest.Mock).mockImplementationOnce(() => slowResponse);

    await expect(fetchWithRetry<TestData>("test-url", { timeout: 100 })).rejects.toThrow(
      "Request timeout"
    );
  });
});
