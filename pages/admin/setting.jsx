import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter
} from "reactstrap";
// rc-table components
import Table from 'rc-table';

// layout for this page
import Admin from "layouts/Admin.js";

import Header from "components/Headers/Header.js";

const UserGroup = (props) => {

    const columns = [
        {
          title: 'Key',
          dataIndex: 'keys',
          key: 'a',
          width: '50%',
        },
        {
          title: 'Value',
          dataIndex: 'value',
          key: 'b',
          width: '50%',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'c',
            render() {
              return (
                  <div className="">
                      <Button color="warning" onClick={toggle}>
                      <i className="ni ni-collection"></i>
                  </Button>
                  <Modal isOpen={modal} toggle={toggle}>
                      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                      <ModalBody>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </ModalBody>
                      <ModalFooter>
                      <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                      <Button color="secondary" onClick={toggle}>Cancel</Button>
                      </ModalFooter>
                  </Modal>
                  </div>
              );
            },
          },
      ];
      
      const data = [
        { keys:'STAMP_NOM', value:'10000',  key: '1' },
      ];
      
    const [modal, setModal] = React.useState(false);
    
    const toggle = () => setModal(!modal);
      

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt-3" fluid>
          <div className="d-flex justify-content-between mb-5">
            <h2>Setting List</h2>
          </div>
        <div className="row justify-content-center">
            <div className="col-12">
                <Table
                    columns={columns}
                    data={data}
                    className="table text-center"
                    />
            </div>
        </div>
      </Container>
    </>
  );
};

UserGroup.layout = Admin;

export default UserGroup;
