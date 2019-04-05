import { css, StyleSheet } from "aphrodite/no-important";
import React, { PureComponent } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import PreloadImage from "react-preload-image";
import "firebase/database";
import { FirebaseDatabaseMutation } from "@react-firebase/database";

class QuizPage extends PureComponent {
  constructor(props) {
    super(props);

    document.title = this.props.page.title;
  }

  render() {
    const {
      page: { img },
      quiz: { button, question, elements },
      quizAnswers
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
                position: "relative",
                marginBottom: 36
              }}
              lazy
              src={img.src}
              alt={img.alt}
            />
            <h3>{question}</h3>
            <FirebaseDatabaseMutation type="push" path="answers">
              {({ runMutation }) => (
                <Form
                  onSubmit={async ev => {
                    ev.preventDefault();
                    var t = await runMutation({
                      FirstName: ev.target[0].value,
                      LastName: ev.target[1].value
                      // created_at: firebase.database.ServerValue.TIMESTAMP,
                      // updated_at: firebase.database.ServerValue.TIMESTAMP
                    });
                  }}
                  className={css(styles.form)}
                >
                  <Form.Row>
                    {elements.map((item, i) => (
                      <Form.Group
                        as={Col}
                        controlId={`formGrid${item.placeHolder.trim()}`}
                      >
                        <Form.Control
                          value={quizAnswers ? quizAnswers[i] : undefined}
                          type={item.type}
                          placeholder={item.placeHolder}
                        />
                      </Form.Group>
                    ))}
                  </Form.Row>
                  <Button
                    className={css(styles.button)}
                    variant="secondary"
                    type="submit"
                  >
                    {button}
                  </Button>
                </Form>
              )}
            </FirebaseDatabaseMutation>
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
  skout: {
    display: "flex!important",
    justifyContent: "start",
    alignItems: "center",
    flexDirection: "column",
    fontWeight: 500,
    marginTop: 200
  },
  mainInfo: {
    maxWidth: 1050,
    padding: "20px 20px",
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
    margin: 58,
    textTransform: "uppercase"
  },
  form: {
    maxWidth: 480,
    margin: "58px auto",
    ":nth-child(1n) .form-row": {
      "@media (max-width: 500px)": {
        flexDirection: "column"
      }
    }
  }
});

function mapStateToProps({ pages, quiz, quizAnswers }, { match }) {
  const id = match.params.quizId ? parseInt(match.params.quizId) : 0;
  return {
    page: pages.find(page => page.name === "quiz"),
    quiz: quiz[id],
    quizAnswers: quizAnswers.find(q => q.id === id)
  };
}

export default connect(mapStateToProps)(QuizPage);
