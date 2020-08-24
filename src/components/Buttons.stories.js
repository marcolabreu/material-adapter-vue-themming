import Buttons from "./Buttons";

export default {
  title: "Components/Buttons",
};

export const All = () => ({
  components: { Buttons },
  template: "<Buttons />",
});

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template:
    "<mcw-button :raised='raised' :outlined='outlined' :disabled='disabled'>{{ label }}</mcw-button>",
});

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Outlined",
  outlined: true,
};

export const OutlinedDisabled = Template.bind({});
OutlinedDisabled.args = {
  label: "Outlined Disabled",
  disabled: true,
  outlined: true,
};

export const Raised = Template.bind({});
Raised.args = {
  label: "Raised",
  raised: true,
};

export const RaisedDisabled = Template.bind({});
RaisedDisabled.args = {
  label: "Raised Disabled",
  disabled: true,
  raised: true,
};

export const Simple = Template.bind({});
Simple.args = {
  label: "Standard",
};
