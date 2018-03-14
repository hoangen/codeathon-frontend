import React from 'react';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import IsolatedScroll from 'react-isolated-scroll';
import { Field } from 'redux-form';
import { connect } from 'react-redux'
import { getCompanyName, clearCompanyName } from './../../actions/actionCreator'
import {InputCompanyName} from "./inputCompanyName";

class AutosuggestionInputComponent extends React.Component {
	constructor(props) {
		super(props);

		// Autosuggest is a controlled component.
		// This means that you need to provide an input value
		// and an onChange handler that updates this value (see below).
		// Suggestions also need to be provided to the Autosuggest,
		// and they are initially empty because the Autosuggest is closed.
		this.state = {
			value: '',
			shouldShowError: false
		};
	}

	componentDidMount() {
		let { selectedValue } = this.props;
		let value = selectedValue ? selectedValue : '';
		this.setState({
			value: value
		});
	}

	// When suggestion is clicked, Autosuggest needs to populate the input
	// based on the clicked suggestion. Teach Autosuggest how to calculate the
	// input value for every given suggestion.
	// getSuggestionValue = suggestion => suggestion.value;

	// Use your imagination to render suggestions.
	renderSuggestion = (suggestion, { query }) => {
		let matches = match(suggestion.value, query);
		let parts = parse(suggestion.value, matches);
		return (
			(suggestion === undefined && (
				<span className="autosuggest-rectangle-18-copy-6">
					{this.props.emptySearchResultMessage}
				</span>
			)) || (
				<span>
					{parts.map((part, index) => {
						let className = part.highlight ? 'react-autosuggest__suggestion-match' : null;
						return (
							<span className={className} key={index}>
								{part.text}
							</span>
						);
					})}
				</span>
			)
		);
	};

	onChange = (event, { newValue, method }) => {
		let { input } = this.props;
		input.onChange(event);
		this.setState({
			value: newValue
		});
	};

	onBlur = (event, { highlightedSuggestion }) => {
		let { input } = this.props;
		input.onBlur(event.target.value);
		this.setState({
			value: event.target.value
		});
	};

	onSuggestionSelected = (
		event,
		{ suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
	) => {
		let { input } = this.props;
		if (method === 'click') {
			input.onChange(suggestionValue);
		} else {
			input.onChange(event);
		}
	};

  renderInputComponent = (props) => (
    <InputCompanyName {...props} value={this.props.selectedValue} onChangeCompanyName={(event)=> { event.target.value.length >= this.props.minimalSearchingLength && props.onChange(event)}}/>
  )

	renderSuggestionsContainer = ({ containerProps, children, query }) => {
		const { ref, ...restContainerProps } = containerProps;
		const callRef = isolatedScroll => {
			if (isolatedScroll !== null) {
				ref(isolatedScroll.component);
			}
		};
		return (
			<IsolatedScroll ref={callRef} {...restContainerProps}>
				{children}
				{this.state.notFound && <div>{this.props.emptySearchResultMessage}</div>}
			</IsolatedScroll>
		);
	};

	shouldRenderSuggestions = value => {
		let { minimalSearchingLength } = this.props;
		return value.trim().length >= minimalSearchingLength;
	};

	render() {
		let { value, shouldShowError } = this.state;
		let { className, hint, label, meta: { touched, error }, maxLength } = this.props;
		let hasError = touched && (error || shouldShowError);
		// Autosuggest will pass through all these props to the input.
		let inputProps = {
			placeholder: hint,
			value,
			onChange: this.onChange,
			onBlur: this.onBlur,
			label,
			maxLength
		};
		const { suggestions, onSuggestionsFetchRequested, onSuggestionsClearRequested } = this.props;

		// Finally, render it!
		return (
			<div className={`${className} ${hasError && 'has-error has-danger'}`}>
				<label htmlFor="companyName" className='gray-small-text'>{label}</label>
				<Autosuggest
					suggestions={suggestions}
					onSuggestionsFetchRequested={onSuggestionsFetchRequested}
					onSuggestionsClearRequested={onSuggestionsClearRequested}
					getSuggestionValue={(suggestion) => suggestion.value}
					renderSuggestion={this.renderSuggestion}
					renderInputComponent={this.renderInputComponent}
					shouldRenderSuggestions={this.shouldRenderSuggestions}
					onSuggestionSelected={this.onSuggestionSelected}
					inputProps={inputProps}
					highlightFirstSuggestion={true}
				/>
				{hasError && (
					<span className="help-block with-errors">{error}</span>
				)}
			</div>
		);
	}
}

const AutosuggestionInput = props => (
	<Field {...props} name={props.name} component={AutosuggestionInputComponent} />
);

export default connect(
	({companyNames}) => ({
		suggestions: companyNames.dataList
	}),
	(dispatch) => ({
		onSuggestionsFetchRequested: ({value}) => dispatch(getCompanyName(value)),
		onSuggestionsClearRequested: () => dispatch(clearCompanyName())
	}))(AutosuggestionInput);
