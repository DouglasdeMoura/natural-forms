# Input

A input component with built-in validation that fires on the [`blur`](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
event.

## Features

- Input validation that uses the [`ValidityState`](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) interface;
- Custom validation using a validator function passed to the `custom` prop;
- Applies a mask to the input using a custom function passed to the `mask` prop;
- Fires a `onError` event when the input is invalid;
- Fires a `onValidate` event when the input is valid;
- Input's `name` and `id` attributes are automatically generated when not provided;
- Compatible with any styling mwthod, as it exposes the HTML elements directly.

## Installation

Install with your preferred package manager:

```
npm install @natural-forms/input
```

or

```
yarn add @natural-forms/input
```

## Anatomy

```tsx
import * as Input from '@natural-forms/input'

export default () => {
  <Input.Root>
    <Input.Label />
    <Input.Input />
    <Input.Error />
  </Input.Root>
}
```

## API reference

### Root

The `div` element that should wrap the input, label and error components,
in order to provide the context that shared the `input`'s id with the `label`.

Accepts all props of a `div` element.

### Label

The `label` element that should be used to describe the input. It's text is used
to generate the `input`'s `id` and `name` attributes.

Accepts all props of a `label` element.

### Input

The `input` element that should be used to capture the user's input. If no `id`
is provided, "camelcasify" the `label`'s text and use it as the `id` attribute.
If no `name` is provided, use the `id` attribute.

Besides the props of the `input` element, it accepts the following props:

- `onError`: receives a function that is called when the input is invalid. It receives the current input value and the list of erros;
- `onValidate`: receives a function that is called when the input is valid;
- `custom`: receives a custom validation function that will be applied to the stack of validators;
- `mask`: receives a function that applies a mask to the input's value.

### Error

A `p` element that shows the first error message from the list of errors.

## Styling

When the data is invalid, all the elemente receive an attribute `data-invalid`
with the value `true`. Therefore, you will be able to style all the elements
like the example below:

```css
[data-invalid="true"] {
  color: red;
}
```

The error message container element has a `data-error` attribute. Therefore,
you can style it like the example below:

```css
[data-error] {
  color: red;
}
```
