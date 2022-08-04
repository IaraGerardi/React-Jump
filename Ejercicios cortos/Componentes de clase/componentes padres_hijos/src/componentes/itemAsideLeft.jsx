import React from "react"

export class ItemAsideLeft extends React.Component {
    render() {
        return (<li>
            <img src={this.props.icono}  alt={`"${this.props.nombre}"`} />
                <span>{this.props.nombre}</span>
        </li>);
    }
}
