/**
 * Question 1: Generic Component Creator
 *
 * Fix this generic component creator to:
 * 1. Ensure props are properly typed
 * 2. Make the build method return the correct type
 * 3. Implement proper initialization
 */

export function createComponent<Props>() {
  let props: Props | null = null; 

  return {
    setProps(newProps: Props) {
      props = newProps; 
    },
    build(): Props {
      if (props === null) {
        throw new Error("Props are not set");
      }
      return props; 
    },
  };
}
