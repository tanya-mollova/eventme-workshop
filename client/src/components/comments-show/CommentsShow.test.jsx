import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CommentsShow from "./CommentsShow";

describe("Comments Show Component", () => {
  it("Should show New comment", () => {
    const comments = [
      {
        _ownerId: 123,
        id: 123,
        comment: "Test comment",
        author: { username: "Admin" },
      },
    ];
    render(<CommentsShow comments={comments} />);

    const commentItem = screen.getByTestId("test-comment");
    expect(commentItem.textContent).toHaveLength(20);
    expect(commentItem).toBeInTheDocument();
  });
});
