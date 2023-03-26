import { act, render, screen, waitFor } from "@testing-library/react";
import AllResults from "../../../components/List/components/Results/AllResults";
import { multiplePostsMock } from "../../../__mocks__/postMocks";
import "@testing-library/jest-dom";
import { IPost } from "../../../interfaces/Post";
import { intersectionObserverMosk } from "../../../__mocks__/functionMock";

//Mock the function that all the API
jest.mock("../../../services/api-service/post-service", () => ({
  __esModule: true,
  listPosts: jest
    .fn()
    .mockImplementation(
      (_framerowk: string, _page: number): Promise<IPost[]> => {
        return Promise.resolve(multiplePostsMock);
      }
    ),
}));

describe("AllResults component", () => {
  it("Renders all the Posts retrieved from the API", async () => {
    window.IntersectionObserver = intersectionObserverMosk;

    //Render an async component
    act(() => {
      render(<AllResults framework="angular" />);
    });

    //Wait for the rendering to finish, including internal state updates
    await waitFor(() => {
      const ul = screen.getByRole("list");
      //Check that the list contains an exact quantity of children
      expect(ul.children.length).toBe(multiplePostsMock.length);

      //Check that the children are all listitems
      expect(screen.getAllByRole("listitem").length).toBe(
        multiplePostsMock.length
      );
    });
  });
});
