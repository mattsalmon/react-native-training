import {render, fireEvent } from "testing-library/react-native"
import ShoppingList from "."

describe("Happy path", () => {
 test("Given empty shopping list a user can add to it"), () => {
    const { getByText, getByPlaceholderText, getAllByText } = render(<ShoppingList />);
    const input = getByPlaceholderText("Enter shopping item");
    fireEvent.changeText(input, "bananas");
    fireEvent.press(getByText("Add the item to the list"));

    const bananas = getAllByText("bananas");
    expect(bananas).toHaveLength(1);
 };
});
