import React,{useContext} from 'react';
import {QuackNavBar} from '../components/QuackNavBar';
import QuackContext from '../context';
import styled from 'styled-components';
import {QuackCard} from '../components/QuackCard';

const ResultWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`

const QuackResults = () => {
    const {state, dispatch} = useContext(QuackContext);

    return (
        <div>
            <QuackNavBar/>
            <ResultWrapper>
            {state.results.map((ele) => {
                return (<QuackCard data={ele}/>)
            })}
            </ResultWrapper>
        </div>
    );
};

export default QuackResults;