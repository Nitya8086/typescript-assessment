/**
 * Question 1: Generic Component Creator
 *
 * Fix this generic component creator to:
 * 1. Ensure props are properly typed
 * 2. Make the build method return the correct type
 * 3. Implement proper initialization
 */

export function createComponent<Props>() {
  let props: Props | undefined;

  return {
    setProps: (newProps: Props) => {
      props = newProps;
    },
    build: () => {
      if (!props) throw new Error("Props not set");
      return { props };
    },
  };
}
