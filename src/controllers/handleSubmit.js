import { output } from "../utils/output";

export function handleSubmit(event = new Event()) {
  event.preventDefault();

  const inputs = event.target;
  const name = inputs[0];
  const email = inputs[1];

  output(
    `Thank you ${name.value} for your submission. Use the code "PARTYNOW" for 25% your first booking.<br> Your discount code has also been sent to ${email.value}.`
  );
}
