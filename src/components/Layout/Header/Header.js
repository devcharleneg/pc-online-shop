import React, {Component} from 'react';
import { Menu, Dropdown, Button, Search } from 'semantic-ui-react'

class Header extends Component {
    state = {
        laptops: ["Acer","Alienware","Apple","Dell","HP","MSI","Razer","Samsung","Toshiba"],
        laptopDropdown: null
    }
    constructor() {
        super()
    }

    componentWillMount() {
        let laptops = []
        this.state.laptops.map((laptop,index)=>{
             laptops.push(<Dropdown.Item key={index}>{ laptop }</Dropdown.Item>)
        })
        this.setState({laptopDropdown: laptops})
    }
    
    render() {
        let { laptopDropdown } = this.state
        
        return (
            <Menu stackable inverted>
                <Menu.Item>PC Online Shop</Menu.Item>
                <Dropdown text='Computers' pointing className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Header>PC</Dropdown.Header>
                            <Dropdown.Item>Office</Dropdown.Item>
                            <Dropdown.Item>Gaming</Dropdown.Item>
                        <Dropdown.Divider />

                        <Dropdown.Header>Laptops</Dropdown.Header>
                        {laptopDropdown }
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown text='Parts' pointing className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Header>Processor</Dropdown.Header>
                            <Dropdown.Item>Intel</Dropdown.Item>
                            <Dropdown.Item>AMD</Dropdown.Item>
                            <Dropdown.Divider />
                        <Dropdown.Header>Video Card</Dropdown.Header>
                            <Dropdown.Item>Nvidia</Dropdown.Item>
                            <Dropdown.Item>Radeon</Dropdown.Item>
                            <Dropdown.Divider />
                        <Dropdown.Header>Storage</Dropdown.Header>
                            <Dropdown.Item>Hard Disk Drive</Dropdown.Item>
                            <Dropdown.Item>Solid State Drive</Dropdown.Item>
                            <Dropdown.Divider />
                        <Dropdown.Item>Motherboard</Dropdown.Item>
                        <Dropdown.Item>Power Supply</Dropdown.Item>
                        <Dropdown.Item>Case</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown text='Peripherals' pointing className='link item'>
                    <Dropdown.Menu>
                            <Dropdown.Item>Monitors</Dropdown.Item>
                            <Dropdown.Item>Speakers/Headphones</Dropdown.Item>
                            <Dropdown.Item>Keyboard</Dropdown.Item>
                            <Dropdown.Item>Mouse</Dropdown.Item>
                            <Dropdown.Item>Controllers</Dropdown.Item>
                            <Dropdown.Item>Printer/Scanner</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item>
                <Search />
                </Menu.Item>
            </Menu>
        )
    }

}

export default Header;