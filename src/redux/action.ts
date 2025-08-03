export const EXAMPLE_ACTION = "Add_Money";

export function ExampleAction(payload: any) {
  return { type: EXAMPLE_ACTION, payload };
}