import React from 'react';

const ListItem = (props) => {
  return (
    <li>
    <strong><a href={props.address}>{props.title}</a></strong>
    &nbsp;- {props.description}
  </li>
  )
}

export default ListItem;