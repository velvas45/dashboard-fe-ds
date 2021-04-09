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

const Log = (props) => {

    const columns = [
        {
          title: 'Subject',
          dataIndex: 'subject',
          key: 'a',
          width: '20%',
        },
        {
          title: 'Activity',
          dataIndex: 'email',
          key: 'b',
          width: '25%',
        },
        {
            title: 'Content',
            dataIndex: 'email',
            key: 'c',
            width: '30%',
          },
          {
            title: 'Module',
            dataIndex: 'email',
            key: 'd',
          },
          {
            title: 'On',
            dataIndex: 'email',
            key: 'e',
            width:'20%',
          },
      ];
      
      const data = [
      ];
      
    const [modal, setModal] = React.useState(false);
    
    const toggle = () => setModal(!modal);
      

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt-3" fluid>
          <div className="d-flex justify-content-between mb-3">
            <h2>Log List</h2>
            <div>
                <Button color="danger" onClick={toggle}>Add New User</Button>
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
          </div>
        <div className="row justify-content-center">
            <div className="col-md-12">
                <Table
                    columns={columns}
                    // rowClassName={(record, i) => `row-${i}`}
                    expandedRowRender={record => <p>extra: {record.a}</p>}
                    expandedRowClassName={(record, i) => `ex-row-${i}`}
                    data={data}
                    className="table text-center"
                    />
            </div>
        </div>
      </Container>
    </>
  );
};

Log.layout = Admin;

export default Log;
