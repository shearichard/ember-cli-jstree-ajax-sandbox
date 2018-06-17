import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';

export default Controller.extend({
  plugins: "search",

  searchTerm: "",

  searchOptions: computed(() => ({
    show_only_matches: true
  })),

  data: computed(() => [
    {
      id: "fr",
      text: "XFrance",
      state: {
        opened: false,
        selected: false
      },
      children: [
        {
          text: "Lyons"
        },
        {
          id: "fr-pa",
          text: "Paris",
          children: [
            "1st Arrondisment",
            "2nd Arrondisment",
            "3rd Arrondisment",
            "4th Arrondisment",
            "5th Arrondisment",
          ]
        },
        {
          text: "Nimes"
        },
      ]
    },
    {
      id: "nz",
      text: "New Zealand",
      state: {
        opened: false,
        selected: false
      },
      children: [
        {
          text: "Auckland",
          children: [
            "Devonport",
            "Mt Wellington",
            "Mt Roskill",
            "K Road",
          ]
        },
        {
          id: "nz-wg",
          text: "Wellington",
          children: [
            "Miramar",
            "Mt Cook",
            "Strathmore",
            "Kilbirnie",
          ]
        },
        {
          text: "Christchurch"
        },
        {
          text: "Wanganui"
        },
      ]
    },
    "Germany",
    {
      id: "au",
      text: "Australia",
      state: {
        opened: false,
        selected: false
      },
      children: [
        {
          text: "Sydney"
        },
        {
          text: "Melbourne"
        },
        {
          text: "Brisbane"
        },
        {
          text: "Wagga-wagga"
        },
      ]
    }
]),
  dataHIDE: computed(() => [
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
