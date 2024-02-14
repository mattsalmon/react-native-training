import {render, fireEvent } from "testing-library/react-native"
import Footer from "."

describe("Happy path", () => {
 test("Given empty shopping list a user can add to it"), () => {
    const { getByText } = render(<ShoppingList />);
    const text = getByText("© 2024 MMU");
    expect(text).toBe("© 2024 MMU");
 };
});

