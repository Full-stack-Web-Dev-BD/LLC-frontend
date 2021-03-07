/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { colors } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';


import ContactsIcon from '@material-ui/icons/Contacts';


import { Label } from 'components';

import NavigateNext  from '@material-ui/icons/NavigateNext';
import Money  from '@material-ui/icons/Money';

export default [
  {
    title: 'Pages',
    pages: [
      {
        title: 'Overview',
        href: '/overview',
        icon: HomeIcon
      },
      {
        title: 'Organization ',
        href: '/',
        icon: DashboardIcon,
        children: [
          {
            title: '  User Management',
            href: '/dashboards/default'
          },
          {
            title: 'Branches',
            href: '/dashboards/analytics'
          },
          {
            title: 'Staff ',
            href: '/dashboard/'
          },
          {
            title: 'Location Master',
            href: '/dashboard/'
          },
          {
            title: 'Gender Master',
            href: '/dashboard/'
          },
          {
            title: 'Title Master',
            href: '/dashboard/'
          },
          {
            title: 'Specialty Master',
            href: '/dashboard/'
          },
          {
            title: 'Ref.Center Category  Master',
            href: '/dashboard/'
          },
          {
            title: 'SMS API Setup',
            href: '/dashboard/'
          },
          {
            title: 'Email API Setup',
            href: '/dashboard/'
          },
          {
            title: 'Facebook API Setup',
            href: '/dashboard/'
          },
          {
            title: 'Instagram API Setup',
            href: '/dashboard/'
          },
          {
            title: 'Whatsapp API Setup',
            href: '/dashboard/'
          },
          {
            title: 'Company Calender Setup',
            href: '/dashboard/'
          },
        ]
      },
      {
        title: 'Contact ',
        href: '/management',
        icon: ChatIcon,
        children: [
          {
            title: 'Patient',
            href: '/management/customers'
          },
          {
            title: 'Referring Person',
            href: '/management/customers'
          },
          {
            title: 'Referring Center',
            href: '/management/customers'
          },
          {
            title: 'Guardian',
            href: '/management/customers'
          },
          {
            title: 'HMO Master',
            href: '/management/customers'
          }
        ]
      },
      {
        title: 'Registration & Billing',
        href: '/profile',
        icon: PeopleIcon,
        children: [
          {
            title: 'New Billing',
            href: '/profile/1/timeline'
          },
          {
            title: 'All Bills',
            href: '/profile/1/timeline'
          },
          {
            title: 'Appointments',
            href: '/profile/1/timeline'
          }
        ]
      },
      {
        title: 'Accession',
        href: '/projects',
        icon: NavigateNext,
        children: [
          {
            title: 'Pending Accession',
            href: '/projects'
          },
          {
            title: 'Accessed',
            href: '/projects'
          }
        ]
      },

      {
        title: 'Perform Tests',
        href: '/projects',
        icon: NavigateNext,
        children: [
          {
            title: 'Incomplete',
            href: '/projects'
          },
          {
            title: 'Partially Completed',
            href: '/projects'
          },
          {
            title: 'Fully Completed',
            href: '/projects'
          },
          {
            title: 'Signed',
            href: '/projects'
          },
          {
            title: 'Delivered',
            href: '/projects'
          },
          {
            title: 'All Tests',
            href: '/projects/create'
          }
        ]
      },

      {
        title: 'Operational DB',
        href: '/projects',
        icon: ViewModuleIcon,
        children: [
          {
            title: ' All Tests',
            href: '/projects'
          },
          {
            title: 'Incomplete',
            href: '/projects'
          },
          {
            title: 'Partially Completed',
            href: '/projects'
          },
          {
            title: 'Fully Completed',
            href: '/projects'
          },
          {
            title: 'Signed',
            href: '/projects'
          },
          {
            title: 'Delivered',
            href: '/projects'
          },
        ]
      },

      {
        title: 'Test Configuration',
        href: '/projects',
        icon: ListAltIcon,
        children: [
          {
            title: 'Test Master',
            href: '/test-configuration'
          },
          {
            title: 'Sample Master',
            href: '/test-configuration'
          },
          {
            title: 'Category Master',
            href: '/test-configuration'
          },
          {
            title: 'Department Master',
            href: '/test-configuration'
          },
          {
            title: 'Units Master',
            href: '/test-configuration'
          },
          {
            title: 'Profile Master',
            href: '/test-configuration'
          },
          {
            title: 'Report Format Master',
            href: '/test-configuration'
          },
        ]
      },
      {
        title: 'Expenses & Inventory',
        href: '/social-feed',
        icon: PeopleIcon
      },
      {
        title: 'Warehouse Inventory',
        href: '/projects',
        icon: LockOpenIcon,
        children: [
          {
            title: 'Stock Management',
            href: '/stok-management'
          },
          {
            title: 'Inventory Purchase',
            href: '/stok-management'
          },
          {
            title: 'Supplier Master',
            href: '/stok-management'
          },
          {
            title: 'Product Master',
            href: '/stok-management'
          },
          {
            title: 'Inventory Reports',
            href: '/stok-management'
          },
          {
            title: 'Expense Master',
            href: '/stok-management'
          },
          {
            title: 'Make Expense',
            href: '/stok-management'
          },
          {
            title: 'Expense Report',
            href: '/stok-management'
          },
        ]
      },

      {
        title: 'Branch Inventory',
        href: '/projects',
        icon: LockOpenIcon,
        children: [
          {
            title: 'Stock Management',
            href: '/branch-inventory'
          },
          {
            title: 'Inventory Request',
            href: '/branch-inventory'
          },
          {
            title: 'Inventory Reports',
            href: '/branch-inventory'
          },
          {
            title: 'Make Expense',
            href: '/branch-inventory'
          },
          {
            title: 'Expense Report',
            href: '/branch-inventory'
          },
          {
            title: 'Map Test to Products',
            href: '/branch-inventory'
          },
        ]
      },
      {
        title: 'Finance',
        href: '/projects',
        icon: Money,
        children: [
          {
            title: 'Finance Dashboard',
            href: '/finance'
          },
          {
            title: 'Patients Finances',
            href: '/finance'
          },
          {
            title: 'Referral Person Finances',
            href: '/finance'
          },
          {
            title: 'Referral Center Finances',
            href: '/finance'
          },
          {
            title: 'Expense Reports',
            href: '/finance'
          },
          {
            title: 'Sales Reports',
            href: '/finance'
          },
          {
            title: 'Staff Payments',
            href: '/finance'
          },
        ]
      },

      {
        title: 'Operational Analytics',
        href: '/projects',
        icon: BarChartIcon,
        children: [
          {
            title: 'Test Analytics',
            href: '/operational-analytics'
          },
          {
            title: 'Activity Log',
            href: '/operational-analytics'
          },
          {
            title: 'TAT Analytics',
            href: '/operational-analytics'
          },
        ]
      },
      {
        title: 'Communication ',
        href: '/projects',
        icon: ContactsIcon,
        children: [
          {
            title: 'Chat with Colleagues',
            href: '/communication-merketing'
          },
          {
            title: 'Chat with Clients',
            href: '/communication-merketing'
          },
          {
            title: 'Send SMS/Email',
            href: '/communication-merketing'
          },
          {
            title: 'Publish on Social Media',
            href: '/communication-merketing'
          }
        ]
      },
      {
        title: 'Machine Interfacing',
        href: '/invoices/1',
        icon: ReceiptIcon
      },
      {
        title: 'Mail',
        href: '/mail',
        icon: MailIcon,
        label: () => (
          <Label
            color={colors.red[500]}
            shape="rounded"
          >
            2
          </Label>
        )
      },
      {
        title: 'Chat',
        href: '/chat',
        icon: ChatIcon,
        label: () => (
          <Label
            color={colors.red[500]}
            shape="rounded"
          >
            4
          </Label>
        )
      },
      {
        title: 'Settings',
        href: '/settings',
        icon: SettingsIcon,
        children: [
          {
            title: 'General',
            href: '/settings/general'
          },
          {
            title: 'Subscription',
            href: '/settings/subscription'
          },
          {
            title: 'Notifications',
            href: '/settings/notifications'
          },
          {
            title: 'Security',
            href: '/settings/security'
          }
        ]
      }
    ]
  }
];
