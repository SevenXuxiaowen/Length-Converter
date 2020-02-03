import React from 'react';
import { formula } from '../api/formula';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valueA: '1', 
            valueB: '2.54', 
            unitA: 'in',
            unitB: 'cm',
            validation: true
        }
    }

    handleChanges1(e){
        if(isNaN(e.target.value)){
            this.setState({
                validation: false, 
                valueB: '-'});
        }else{
            let val = formula.convert(e.target.value, this.state.unitA, this.state.unitB);
            this.setState({
                validation: true,
                valueB: val
            });
        }
        this.setState({valueA: e.target.value});
    }

    handleChanges2(e){
        if(isNaN(e.target.value)){
            this.setState({
                validation: false, 
                valueA: '-'
            });
        }else{
            let val = formula.convert(e.target.value, this.state.unitB, this.state.unitA);
            this.setState({
                validation: true,
                valueA: val
            });
        }
        this.setState({valueB: e.target.value});
    }

    handleUnit1(e){
        if(this.state.validation){
            let val = formula.convert(this.state.valueA, e.target.value, this.state.unitB);
            this.setState({valueB: val});
        }
        this.setState({unitA: e.target.value,});
    }

    handleUnit2(e){
        if(this.state.validation){
            let val = formula.convert(this.state.valueA, this.state.unitA, e.target.value);
            this.setState({valueB: val});
        }
        this.setState({unitB: e.target.value,});
    }

    render(){
        return(
            <div className="container card" style={{width: "500px", marginTop: "50px"}}>
                <div className="card-body" >
                    <h3>Length Converter</h3>
                    {/* 1st BOX*/}
                    <form>
                        <div className="input-group">
                            <input className="form-control" type="string" value = {this.state.valueA} onChange={e => this.handleChanges1(e)}/>
                            <select className="custom-select" name="units" defaultValue='in' onChange={e => this.handleUnit1(e)}>
                                <option value='in' >{formula.unitsName['in']}</option>
                                <option value='mm'>{formula.unitsName['mm']}</option>
                                <option value='cm'>{formula.unitsName['cm']}</option>
                                <option value='m'>{formula.unitsName['m']}</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <input className="form-control" type="string" value = {this.state.valueB} onChange={e => this.handleChanges2(e)}/>
                            <select className="custom-select" name="units" defaultValue='cm' onChange={e => this.handleUnit2(e)}>
                                <option value='in'>{formula.unitsName['in']}</option>
                                <option value='mm'>{formula.unitsName['mm']}</option>
                                <option value='cm'>{formula.unitsName['cm']}</option>
                                <option value='m'>{formula.unitsName['m']}</option>
                            </select>
                        </div>
                    </form>
                    <br/>
                    <Message valid = {this.state.validation} />
                    
                </div>
            </div>
        )
    }
}

class Message extends React.Component{
    render(){
        //console.log("test parse -- " + this.props.valid);
        if(this.props.valid){
            return <div className="normal">Please input a number in the input box</div>;
        }else{
            return <div className="alert alert-danger">invalid input</div>
        }
    }
}
export default Form;
