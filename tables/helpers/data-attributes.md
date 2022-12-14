# Data Attributes

> `[data-...]` attributes for targeted CSS styling.

The markdown generated by the `<Table />` and `<MiniTable />` components contains several `[data-...]` attributes to make it easier to target specific DOM elements.

## Attributes

| Attribute         | Location  | Description                                                         |
| ----------------- | --------- | ------------------------------------------------------------------- |
| `data-table`      | `<table>` | Identifies tables created with the `<Table />` component.           |
| `data-mini-table` | `<table>` | Identifies tables created with the `<MiniTable />` component.       |
| `data-key`        | `<th>`    | Identifies which key in the data this **header** belongs to.        |
| `data-sort-asc`   | `<th>`    | Identifies the current sort direction (useful for sort indicators). |
| `data-key`        | `<td>`    | Identifies which key in the data this **cell** belongs to.          |
