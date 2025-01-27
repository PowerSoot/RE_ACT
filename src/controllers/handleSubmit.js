import { output } from "../utils/output";

export function handleSubmit(event = new Event()) {
  event.preventDefault();

  const inputs = event.target;
  const name = inputs[0];
  const email = inputs[1];

  output(
    `Thank you ${name.value} for your submission. Your discount code has been sent to ${email.value}.`
  );
}
