import React from "react";
import PageTemplate from "../components/common/PageTemplate";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    input: {
        display: "none"
    }
});

function ButtonPage(props) {
    // 클래스 변수 초기화
    const { classes } = props;

    return (
        <Button variant="contained" className={classes.button}>
            Modal Test
        </Button>
    );
}

ButtonPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonPage);
