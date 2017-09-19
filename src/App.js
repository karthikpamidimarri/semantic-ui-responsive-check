import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import HomepageLayout from "./modules/trial/HomePage";
import ContainerLayout from "./modules/trial/ContainerLayout";
import TextContainer from "./modules/trial/TextContainer";
import StackableGrid from "./modules/trial/StackableGrid";
import DoublingGrid from "./modules/trial/DoublingGrid";
import DoublingStackableGrid from "./modules/trial/DoublingStackableGrid";
import NestedStackableGrid from "./modules/trial/NestedStackableGrid";
import StackableGridContainer from "./modules/trial/StackableGridContainer";
import DoublingGridContainer from "./modules/trial/DoublingGridContainer";
import DoublingStackableGridContainer from "./modules/trial/DoublingStackableGridContainer";
import DeviceColumnWidthContainer from "./modules/trial/DeviceColumnWidthContainer";
import DeviceVisibilityContainer from "./modules/trial/DeviceVisibilityContainer";
import StackableVerticallyDividedGridContainer from "./modules/trial/StackableVerticallyDividedGridContainer";
import ConsecutiveDoublingStackableGridContainer from "./modules/trial/ConsecutiveDoublingStackableGridContainer";
import StackableDividedGridContainer from "./modules/trial/StackableDividedGridContainer";
import CelledStackableGridContainer from "./modules/trial/CelledStackableGridContainer";
import GridContianer from "./modules/trial/GridContianer";
import ResponsiveTableContianer from "./modules/trial/ResponsiveTableContianer";
import ResponsiveVerticalDividerContianer from "./modules/trial/ResponsiveVerticalDividerContianer";
import ResponsiveMenuContianer from "./modules/trial/ResponsiveMenuContianer";
import ResponsiveItemContianer from "./modules/trial/ResponsiveItemContianer";
import ResponsiveStepsContianer from "./modules/trial/ResponsiveStepsContianer";

import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={HomepageLayout}/>
                    <Route exact path="/container" component={ContainerLayout}/>
                    <Route exact path="/textContainer" component={TextContainer}/>
                    <Route exact path="/stackableGrid" component={StackableGrid}/>
                    <Route exact path="/doublingGrid" component={DoublingGrid}/>
                    <Route exact path="/doublingStackableGrid" component={DoublingStackableGrid}/>
                    <Route exact path="/nestedStackableGrid" component={NestedStackableGrid}/>
                    <Route exact path="/stackableGridContainer" component={StackableGridContainer}/>
                    <Route exact path="/doublingGridContainer" component={DoublingGridContainer}/>
                    <Route exact path="/doublingStackableGridContainer" component={DoublingStackableGridContainer}/>
                    <Route exact path="/deviceColumnWidth" component={DeviceColumnWidthContainer}/>
                    <Route exact path="/deviceVisibility" component={DeviceVisibilityContainer}/>
                    <Route exact path="/stackableDividedGrid" component={StackableDividedGridContainer}/>
                    <Route exact path="/stackableVerticallyDividedGrid" component={StackableVerticallyDividedGridContainer}/>
                    <Route exact path="/celledStackableGrid" component={CelledStackableGridContainer}/>
                    <Route exact path="/stackableGrid" component={StackableGrid}/>
                    <Route exact path="/consecutiveDoublingStackableGrid" component={ConsecutiveDoublingStackableGridContainer}/>
                    <Route exact path="/gridContainer" component={GridContianer}/>
                    <Route exact path="/responsiveVerticalDivider" component={ResponsiveVerticalDividerContianer}/>
                    <Route exact path="/responsiveTable" component={ResponsiveTableContianer}/>
                    <Route exact path="/responsiveMenu" component={ResponsiveMenuContianer}/>
                    <Route exact path="/responsiveItem" component={ResponsiveItemContianer}/>
                    <Route exact path="/responsiveSteps" component={ResponsiveStepsContianer}/>
                </div>
            </Router>
        );
    }
}

export default App;
