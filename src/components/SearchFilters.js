import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';
// import ServiceMapMarker from './ServiceMapMarker';
// import {  Map, TileLayer } from 'react-leaflet';
import MapResults from './MapResults';
import ServiceInfo from '../components/ServiceInfo';


class SearchFilters extends Component {

  constructor() {
    super();
    this.state = {
      showMap: false
    }
  }

  componentWillMount () {
    this.props.loadFilters();
  }


  render() {
    return (
      <div>

        {/*<button onClick={this.props.showMap()}>Show Map</button>*/}

        {this.props.filters.map(( data ) => (<button key={data.num} onClick={()=> this.props.loadResults(data.name)}> {data.name} </button>))}

        <div>
          <MapResults className="container-fluid" map_results={this.props.results} />
          {this.props.results.map((data, key)=> <ServiceInfo key={key} results={data} />)}

          {/*{this.props.showMap ?
            <MapResults className="container-fluid" map_results={this.props.results} />
          : this.props.results.map((data)=> <ServiceInfo results={data} /> ) }*/}
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filters: state.filter,
    results: state.results,
    map_results: state.map_results,
    showMap: state.showMap
  }
}

export default connect(mapStateToProps, actionCreators)(SearchFilters);
