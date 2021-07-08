import * as React from "react";
import { Container } from "reactstrap";
import { BoundActions, ApplicationState } from "store/types/common";
import { appActions } from "store/logic/app";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { getIsAppLoading } from "store/selectors/app-selectors";
import { useEffect } from "react";
import { Category } from "store/types/food-types";
import { getCategories } from "store/selectors/food-selectors";
import Header from "./Header";
import Tabs from "./Tabs";
import Footer from "./Footer";

interface OwnProps {
    children: any;
}

interface StateProps {
    isLoading: boolean;
    categories: Category[];
}

type DispatchProps = BoundActions<typeof appActions>

type Props = OwnProps & StateProps & DispatchProps

const Layout = ({children, isLoading, categories, init}: Props) => {
    
    useEffect(() => {
        init();
    }, []);

    if (isLoading) {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Loading</h1>
            </div>
        )
    }

    return (
        <div>
            <Header/>
            <Container className='layout'>
                <Tabs categories={categories} />
                <div className='layout-content'>
                    {children}
                </div>
                <Footer />
            </Container>
        </div>
    )
}

const mapStateToProps = (state: ApplicationState, props: OwnProps): StateProps => ({
    isLoading: getIsAppLoading(state),
    categories: getCategories(state)
})

const mapDispatchToProps = (dispatch: Dispatch, props: OwnProps): DispatchProps => ({
    ...bindActionCreators(appActions, dispatch)
})

export default connect<StateProps, DispatchProps, OwnProps, ApplicationState>(mapStateToProps, mapDispatchToProps)(Layout);