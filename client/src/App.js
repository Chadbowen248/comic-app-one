import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import base from "./base";
import ComicCollection from "./Landing";
import Search from "./Search";
import Navigation from "./Navigation";

class App extends React.Component {
  state = {
    collection: [],
    titleInput: "",
    imagePath: ""
  };

  componentWillMount() {
    this.ref = base.syncState(`/`, {
      context: this,
      state: "collection"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  handleTitleInput = event => {
    this.setState({ titleInput: event.target.value });
  };
  handleImagePath = event => {
    this.setState({ imagePath: event.target.value });
  };

  removeComic = comic => {
    this.state.collection[comic] = null;
    this.setState({ collection: this.state.collection });
  };

  addComic = comic => {
    const collection = { ...this.state.collection };
    const words = [
      ["One", 1],
      ["Two", 2],
      ["Three", 3],
      ["Four", 4],
      ["Five", 5],
      ["Six", 6],
      ["Seven", 7],
      ["Eight", 8],
      ["Nine", 9],
      ["Ten", 10]
    ];

    comic.volume
      ? (comic.finalName = `${comic.volume.name} ${comic.name}`)
      : (comic.finalName = comic.name);
    for (let i = 0; i < words.length; i++) {
      if (comic.finalName.indexOf(words[i][0]) > -1) {
        comic.finalName = comic.finalName.replace(words[i][0], words[i][1]);
      }
    }
    collection[`comic-${comic.id}`] = comic;
    this.setState({ collection });

    alert(`${comic.finalName} added!!`);
  };

  addComicManually = comic => {
    const collection = { ...this.state.collection };
    collection[`comic-${comic.id}`] = comic;
    this.setState({ collection });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navigation />
          <Route
            exact
            path="/"
            render={() => (
              <ComicCollection
                collection={this.state.collection}
                removeComic={this.removeComic}
              />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <Search
                addComic={this.addComic}
                addComicManually={this.addComicManually}
                handleTitleInput={this.handleTitleInput}
                handleImagePath={this.handleImagePath}
                title={this.state.titleInput}
                image={this.state.imagePath}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
