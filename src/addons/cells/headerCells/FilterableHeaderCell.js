const React              = require('react');
const ExcelColumn        = require('../../grids/ExcelColumn');

const FilterableHeaderCell = React.createClass({

  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    column: React.PropTypes.shape(ExcelColumn)
  },

  getInitialState(): {filterTerm: string} {
    return {filterTerm: ''};
  },

  handleChange(e: Event) {
    let val = e.target.value;
    this.setState({filterTerm: val });
    this.props.onChange({filterTerm: val, columnKey: this.props.column.key});
  },

  renderInput: function(): ?ReactElement {
    if (this.props.column.filterable === false) {
      return <span/>;
    }

    let inputKey = 'header-filter-' + this.props.column.key;
    return (<input key={inputKey} type="text" className="form-control input-sm" placeholder="Search" value={this.state.filterTerm} onChange={this.handleChange}/>);
  },

  render: function(): ?ReactElement {
    return (
      <div>
        <div className="form-group">
          {this.renderInput()}
        </div>
      </div>
    );
  }
});

module.exports = FilterableHeaderCell;
