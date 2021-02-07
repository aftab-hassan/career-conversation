import React, {useState, Fragment, useEffect} from 'react';

import ReactFlow, {Background, Controls, MiniMap} from 'react-flow-renderer';

import ModalWithImage from './ModalWithImage';

import logo3 from './mba-candidates.png'; // with import
import logo4 from './manager-businessanalytics.png'; // with import
import logo6 from './director-media-strategy.png'; // with import
import logo8 from './vp-ea-evp-nhl.png'; // with import
import logo7 from './vp-gaming-facebook.png'; // with import

const initialElements = [
    {
      id: '1',
      data: {
        label: (
          <>
            Software Engineer 2 - Microsoft
          </>
        ),
      },
      position: { x: 250, y: 0 },
      style: {
        background: '#D6D5E6',
        color: '#333',
        border: '1px solid #222138',
      },
    },
    {
      id: '2',
      data: {
        label: (
          <>
            Senior Software Engineer - Microsoft
          </>
        ),
      },
      position: { x: 250, y: 100 },
      style: {
        background: '#D6D5E6',
        color: '#333',
        border: '1px solid #222138',
      },
    },
    {
      id: '9',
      data: {
        label: (
          <>
            Principal Software Engineer - Microsoft
          </>
        ),
      },
      position: { x: 500, y: 200 },
      style: {
        background: '#87ceeb',
        color: '#333',
        border: '1px solid #222138',
      },
    },
    {
      id: '10',
      data: {
        label: (
          <>
            Principal Software Engineering Manager - Microsoft
          </>
        ),
      },
      position: { x: 500, y: 275 },
      style: {
        background: '#87ceeb',
        color: '#333',
        border: '1px solid #222138',
      },
    },
    {
      id: '11',
      data: {
        label: (
          <>
            Partner Group Engineering Manager - Microsoft
          </>
        ),
      },
      position: { x: 500, y: 375 },
      style: {
        background: '#87ceeb',
        color: '#333',
        border: '1px solid #222138',
      },
    },
    {
      id: '12',
      data: {
        label: (
          <>
            Distinguished Engineer - Microsoft
          </>
        ),
      },
      position: { x: 500, y: 450 },
      style: {
        background: '#87ceeb',
        color: '#333',
        border: '1px solid #222138',
      },
    },
    {
      id: '13',
      data: {
        label: (
          <>
            CVP - Microsoft
          </>
        ),
      },
      position: { x: 500, y: 525 },
      style: {
        background: '#87ceeb',
        color: '#333',
        border: '1px solid #222138',
      },
    },
    {
      id: '14',
      data: {
        label: (
          <>
            EVP - Microsoft
          </>
        ),
      },
      position: { x: 500, y: 600 },
      style: {
        background: '#87ceeb',
        color: '#333',
        border: '1px solid #222138',
      },
    },
    {
      id: '15',
      data: {
        label: (
          <>
            CEO - Microsoft
          </>
        ),
      },
      position: { x: 500, y: 675 },
      style: {
        background: '#87ceeb',
        color: '#333',
        border: '1px solid #222138',
      },
    },
    {
      id: '3',
      data: {
        label: (
          <>
            MBA Candidate - Harvard, Stanford, Berkeley, Columbia, Yale, Wharton, Kellogg, Booth
          </>
        ),
      },
      position: { x: 0, y: 200 },
      style: {
        background: '#ff4d4d',
        color: '#333',
        border: '1px solid #222138',
      },
    },
    {
      id: '4',
      data: {
        label: (
          <>
            Manager, Business Analytics/ Strategy and Operations - NBA, NFL, NHL
          </>
        ),
      },
      position: { x: -100, y: 325 },
      style: {
        background: '#3db83b',
        color: '#333',
        border: '1px solid #222138',
      },
    },
    {
      id: '5',
      data: {
        label: (
          <>
            Product Manager/ Strategic Partnerships Development Manager - Google, Facebook, Microsoft
          </>
        ),
      },
      position: { x: 100, y: 325 },
      style: {
        background: '#fcbe11',
        color: '#333',
        border: '1px solid #222138',
      },
    },
    {
      id: '6',
      data: {
        label: (
          <>
            Director, Player programs - NBA, NFL, NHL
          </>
        ),
      },
      position: { x: -100, y: 450 },
      style: {
        background: '#3db83b',
        color: '#333',
        border: '1px solid #222138',
      },
    },
    {
      id: '7',
      data: {
        label: (
          <>
            Vice President
          </>
        ),
      },
      position: { x: 100, y: 450 },
      style: {
        background: '#fcbe11',
        color: '#333',
        border: '1px solid #222138',
      },
    },
    {
      id: '8',
      data: {
        label: (
          <>
            Executive Vice President - NBA, NFL, NHL
          </>
        ),
      },
      position: { x: -100, y: 550 },
      style: {
        background: '#3db83b',
        color: '#333',
        border: '1px solid #222138',
      },
    },
    { id: 'e1-2', source: '1', target: '2', arrowHeadType: 'arrowclosed', animated: true, style: { stroke: 'lightblue' }, },
    {
      id: 'e2-3',
      source: '2',
      target: '3',
      type: 'smoothstep',
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'e2-9',
      source: '2',
      target: '9',
      type: 'smoothstep',
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'e3-4',
      source: '3',
      target: '4',
      type: 'smoothstep',
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'e3-5',
      source: '3',
      target: '5',
      type: 'smoothstep',
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'e4-6',
      source: '4',
      target: '6',
      type: 'smoothstep',
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'e5-7',
      source: '5',
      target: '7',
      type: 'smoothstep',
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'e6-8',
      source: '6',
      target: '8',
      type: 'smoothstep',
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'e9-10',
      source: '9',
      target: '10',
      type: 'smoothstep',
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'e10-11',
      source: '10',
      target: '11',
      type: 'smoothstep',
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'e11-12',
      source: '11',
      target: '12',
      type: 'smoothstep',
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'e12-13',
      source: '12',
      target: '13',
      type: 'smoothstep',
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'e13-14',
      source: '13',
      target: '14',
      type: 'smoothstep',
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'e14-15',
      source: '14',
      target: '15',
      type: 'smoothstep',
      arrowHeadType: 'arrowclosed',
    },
];

const getImgSrc = (id: string | undefined) => {
  if(!id) {
    return undefined;
  }

  const numId = parseInt(id);

  if(!numId) {
    return undefined;
  }

  switch (numId) {
    case 3:
      return logo3;
    case 4:
      return logo4;
    case 6:
      return logo6;
    case 8:
      return logo8;
    case 7:
    return logo7;
  }
}

const onLoad = (reactFlowInstance: any) =>  {
    reactFlowInstance.fitView();
}

const CareerGraph = () => {
    const [elements, setElements] = useState(initialElements);
    const [name, setName] = useState("")
    const [clickedNodeId, setClickedNodeId] = useState(undefined);

  const handleClick = (ev: any) => {
    console.log(ev.target.dataset.id);
    setClickedNodeId(ev.target.dataset.id);
    console.log(clickedNodeId);
  }

  useEffect( () => {
    document.addEventListener('click', handleClick)
  }, [])

  const setIsModalOpen = () => {
    setClickedNodeId(undefined);
  }

    return(
        <Fragment>
            <ReactFlow
            elements={elements as any}
            onLoad={onLoad}
            style={{width:'100%',height: '100vh'}}
            connectionLineStyle={{stroke: "#ddd", strokeWidth: 2}}
            snapToGrid = {true}
            snapGrid={[16,16]}
            >
                <Background
                color="#888"
                gap={16}
                />
                <MiniMap 
                nodeColor={n=>{
                    if(n.type === 'input') return 'blue';
                    
                    return '#FFCC00'
                }} />
                <Controls />
                <ModalWithImage 
                  imgSrc={clickedNodeId ? getImgSrc(clickedNodeId) : undefined}
                  isModalOpen={clickedNodeId}
                  setIsModalOpen = {setIsModalOpen}
                />
                </ReactFlow>
        </Fragment>
    )
}

export default CareerGraph;

// document.querySelectorAll("[data-id='7']")[0].addEventListener('click', () => {console.log('clicked 7')})