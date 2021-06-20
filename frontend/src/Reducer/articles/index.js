const firstState = {
    articles: [],
}

export const setArticles = (articles) => {
    return { type: "SET_ARTICLES", payload: articles };
  };

  export const addArticle = (newArticle) => {
    return { type: "ADD_ARTICLE", payload: newArticle };
  };

  export const updateArticles = (updatedArticle) => {
    return { type: "UPDATE_ARTICLE", payload: updatedArticle };
  };

  export const setArticles = (deletedArticle) => {
    return { type: "DELETE_ARTICLE", payload: deletedArticle };
  };

// give a default value for state
// destructure the action
export default articlesReducers = (state = firstState, { type, payload }) => {
    switch (type) {
      case "SET_ARTICLES":
        return { articles: [...payload] };
  
      default:
        return firstState;
    }
  };