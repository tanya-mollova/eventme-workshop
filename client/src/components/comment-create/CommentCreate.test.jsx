import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import CommentCreate from "./CommentCreate";

describe("Comment create Component", () => {
  beforeEach(() => {
    render(<CommentCreate />);
  });

  it("Should add a new comment when input is filled and form is submitted", async () => {
    const input = screen.getByTestId("add-comment-input");

    fireEvent.change(input, { target: { value: "New Comment" } });
    fireEvent.submit(screen.getByTestId("comment-form"));

    waitFor(() => {
      const commentList = screen.getByTestId("comment-list");
      expect(commentList.children).toHaveLength(1);

      const commentItem = screen.getByText("New Comment");
      expect(commentItem).toBeInTheDocument();
      expect(input).toHaveValue("");
    });
  });
});
