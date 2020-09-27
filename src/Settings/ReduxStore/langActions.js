
export const mapStateToProps = (state) => {
    return {
        lang: state.lang
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        FR: () => dispatch({ type: 'FR' }),
        AR: () => dispatch({ type: 'AR' }),
    }
}
