import React from 'react';
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
} from 'reactstrap';

  export const Row= ({saccoName, registeredDate, status, contacts, idNo}) => (
 
    <thead className="thead-dark">
    <tr>
      <th scope="row">
      <Media  className="align-items-center">
              <Media>
                <a href="/admin/sacco-profile">
                  <span style={{color:"#5dd143"}} className="mb-0 text-sm">
      {saccoName}
      </span>
                </a>
              </Media>
            </Media></th>
      <th style={{color:"white"}}>{registeredDate}</th>
      <th>
            {status === 'Active' ? (
              <Badge color="white" className="badge-dot mr-4">
                <i className="bg-success" />
                Active
              </Badge>
            ) : (
              <Badge color="white" className="badge-dot mr-4">
                <i className="bg-warning" />
                Deactivated
              </Badge>
            )}
          </th>
          <th>
            <span style={{color:"white"}} className="mb-0 text-sm">{contacts}</span>
          </th>
          <th>
            <div className="d-flex align-items-center">
              <span style={{color:"white"}} className="mb-0 text-sm">{idNo}</span>
            </div>
          </th>
          <th  className="text-right">
           <UncontrolledDropdown>
              <DropdownToggle
                className="btn-icon-only text-light"
                href="#pablo"
                role="button"
                size="sm"
                color=""
                
              >
                <i className="fas fa-ellipsis-v" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem href="#pablo" >
                  Edit
                </DropdownItem>
                <DropdownItem href="#pablo" >
                  Deactivate
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </th>
     
      </tr> 
      </thead>
  );