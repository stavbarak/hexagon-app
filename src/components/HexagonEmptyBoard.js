import React, { Component } from "react";
import styled from "styled-components";

class HexagonEmptyBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hexagonStyle: {
        fill: "none",
        stroke: "black",
        "stroke-width": "2"
      }
    };
  }

  // The hexagon methods currently effect the entite board.
  // They should only effect individual hexagons.

  markHexagon = e => {
    this.setState({
      hexagonStyle: {
        fill: "white",
        stroke: "black",
        "stroke-width": "4"
      }
    });
  };

  unmarkHexagon = e => {
    this.setState({
      hexagonStyle: {
        fill: "white",
        stroke: "black",
        "stroke-width": "2"
      }
    });
  };

  // TODO: need to unmark on second click (toggle)
  // and stay fixed no regardless of mouseleave
  fixMarkHexagon = e => {
    this.setState({
      hexagonStyle: {
        fill: "white",
        stroke: "blue",
        "stroke-width": "5"
      }
    });
  };

  render() {
    return (
      <Container>
        <svg viewBox="0 0 1350 770">
          <defs>
            <polygon
              id="hexagon"
              points="50,25 100,25 125,68 100,111 50,111 25,68"
              style={this.state.hexagonStyle}
            />
          </defs>
          {[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
            return [0, 2, 4, 6, 8, 10, 12, 14].map(j => {
              return (
                <>
                  <use
                    xlinkHref="#hexagon"
                    transform={"translate(" + j * 75 + "," + i * 86 + ")"}
                    onClick={this.fixMarkHexagon}
                    onMouseEnter={this.markHexagon}
                    onMouseLeave={this.unmarkHexagon}
                  />
                  <use
                    xlinkHref="#hexagon"
                    transform={
                      "translate(" + (j + 1) * 75 + "," + (i * 86 + 43) + ")"
                    }
                    onClick={this.fixMarkHexagon}
                    onMouseEnter={this.markHexagon}
                    onMouseLeave={this.unmarkHexagon}
                  />
                </>
              );
            });
          })}
          Sorry, your browser does not support inline SVG.
        </svg>
      </Container>
    );
  }
}

export default HexagonEmptyBoard;

const Container = styled.div`
  margin-left: 2em;
`;