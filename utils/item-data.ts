interface ItemsProps {
  id: string;
  name: string;
}

export let items: Array<ItemsProps> = [
  { id: "1", name: "Item One" },
  { id: "2", name: "Item Two" },
  { id: "3", name: "Item Three" },
];

export const setItems = (newItems: Array<ItemsProps>): void => {
  items = newItems;
};
