import { css, StyleSheet } from "aphrodite/no-important";
import React, { PureComponent } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import PreloadImage from "react-preload-image";

class QuizPage extends PureComponent {
  constructor(props) {
    super(props);

    document.title = this.props.page.title;
  }

  render() {
    const {
      page: { img },
      quiz
    } = this.props;
    return (
      <main>
        <div className={css(styles.border)}>
          <div className={css(styles.mainInfo, styles.popular)}>
            <PreloadImage
              style={{
                ...img.size,
                margin: "0 auto",
                display: "block",
                backgroundColor: img.color,
                position: "relative"
              }}
              lazy
              src={img.src}
              alt={img.alt}
            />
            <h1>{quiz.question}</h1>
            <Form className={css(styles.form)}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Control placeholder="First name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Control placeholder="Last name" />
                </Form.Group>
              </Form.Row>
              <Button
                className={css(styles.button)}
                variant="secondary"
                type="submit"
              >
                LETS DO THIS
              </Button>
            </Form>
            <aside className={`${css(styles.skout)} d-lg-block`}>
              <span>POWERED BY</span>
              <span style={{ fontSize: 72, fontWeight: 500, marginTop: -30 }}>
                SKOUT
              </span>
            </aside>
          </div>
        </div>
      </main>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    maxWidth: 600,
    margin: "0 auto",
    marginTop: 20
  },
  skout: {
    display: "flex!important",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    flexDirection: "column",
    fontWeight: 500,
    marginTop: 200
  },
  mainInfo: {
    maxWidth: 1050,
    paddingTop: 20,
    margin: "0 auto",
    textAlign: "center"
  },
  border: {
    border: "1px solid #dfdfdf",
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    padding: "54px 0px 100px 0px",
    marginTop: -1,
    backgroundColor: "#f6f6f6"
  },
  button: {
    width: 200,
    margin: 58
  },
  form: {
    maxWidth: 480,
    margin: "58px auto"
  }
});

function mapStateToProps({ pages }, { match }) {
  const page = pages.find(page => page.name === "quiz");
  const id = match.params.quizId || "1";
  return {
    page,
    quiz: page.quiz.find(q => q.id === id)
  };
}

export default connect(mapStateToProps)(QuizPage);
