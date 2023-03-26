import { render, screen } from "@testing-library/react";
import ResultItem from "../../../components/List/components/Results/ResultItem";
import { uniquePostMock } from "../../../__mocks__/postMocks";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("ResultItem component", () => {
  let handleLikeMock: jest.Mock;

  beforeAll(() => {
    handleLikeMock = jest.fn();
  });

  it("Renders and shows all the information needed for a Not Liked post", () => {
    render(<ResultItem post={uniquePostMock} handleLike={handleLikeMock} />);

    const li = screen.getByRole("listitem");
    expect(li).toBeVisible();
    expect(li.children.length).toBe(2);

    expect(screen.getByRole("link")).toHaveAccessibleName(/Story of my life/i);
    expect(screen.getByRole("button")).toBeVisible();

    expect(screen.getByAltText("Not Liked")).toBeVisible();
  });

  it("Renders and shows all the information needed for a Liked post", () => {
    render(
      <ResultItem
        post={{ ...uniquePostMock, isLiked: true }}
        handleLike={handleLikeMock}
      />
    );

    expect(screen.getByAltText("Liked")).toBeVisible();
  });

  it("Calls the provided function to handle the Like action", async () => {
    render(<ResultItem post={uniquePostMock} handleLike={handleLikeMock} />);
    const user = userEvent.setup();
    const likeButton = screen.getByRole("button");

    await user.click(likeButton);
    //Check if the mock function was called exactly once
    expect(handleLikeMock.mock.calls.length).toBe(1);
    //Check for the 1st parameter received in the function if it is the same as the Id we provided
    expect(handleLikeMock.mock.calls[0][0]).toBe(uniquePostMock.postId);
  });
});
