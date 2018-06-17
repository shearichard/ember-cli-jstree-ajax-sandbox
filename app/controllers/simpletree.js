import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';

export default Controller.extend({
  data: computed(() => [
    "Simple root node",
    {
      text: "Single child node (has tooltip)",
      type: "single-child",
      children: ["one child"],
      a_attr: { class: "hint--top", "data-hint": "Use a_attr to add tooltips" }
    },
    {
      id: "rn2",
      text: "Opened node (has tooltip)",
      state: {
        opened: true,
        selected: true
      },
      a_attr: {
        class: "hint--bottom",
        "data-hint": "This is a bottom mounted node tooltip"
      },
      children: [
        {
          text: "Child 1"
        },
        "Child 2"
      ]
    }
]),
});
