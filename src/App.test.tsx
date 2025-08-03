import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders learn react link', () => {
  render(<App />);
});

// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import renderer from "react-test-renderer";
// import ListTransfer from "./ListTransfer";
// import '@testing-library/jest-dom';

// const allItems = ['Item A', 'Item B', 'Item C', 'Item D'];

// describe("ListTransfer", () => {
//     test("1", async () => {
//         const { container } = render(<ListTransfer allItems={allItems} />);
//         expect(container).toMatchSnapshot();
//         expect(screen.queryByText("Available")).toBeInTheDocument();
//         let nodes = container.querySelectorAll(".left > li");
//         console.log(nodes.length)
//         expect(nodes.length).toBe(4);
//         for (const el of nodes) {
//             fireEvent.click(el);
//         }
//         fireEvent.click(screen.getByTestId("left-btn"));
//         nodes = container.querySelectorAll(".left > li");
//         console.log(nodes.length)
//         expect(nodes.length).toBe(0);
//         nodes = container.querySelectorAll(".right > li");
//         console.log(nodes.length)
//         expect(nodes.length).toBe(4);
//     })
// })

// describe("UserListWithDetails", () => {
//     test("1", async () => {
//         jest.clearAllMocks();
//         const users =[{ id: 1, name: "User" }, { id: 2, name: "User2" }]
//         global.fetch = jest.fn(() => Promise.resolve({
//             json: () => Promise.resolve(users)
//         }));
//         const { container } = render(<UserListWithDetails />);
//         expect(container).toMatchSnapshot();
//         await waitFor(() => {
//             const node = container.querySelectorAll('.user-card');
//             console.log(node)
//             expect(node.length).toBe(2);
//         });
//        fireEvent.click(screen.getAllByText('Show Details')[0]);
//        expect(screen.getByText('Hide Details')).toBeInTheDocument();
//     })
// })
