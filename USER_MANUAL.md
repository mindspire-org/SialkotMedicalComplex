Sialkot Medical Complex - Hospital Management System
Complete End User Manual

---

Table of Contents
1. [System Overview](#1-system-overview)
2. [Module Access & Navigation](#2-module-access--navigation)
3. [Hospital Module](#3-hospital-module)
4. [Lab Module](#4-lab-module)
5. [Diagnostics Module](#5-diagnostics-module)
6. [Pharmacy Module](#6-pharmacy-module)
7. [Aesthetic Module](#7-aesthetic-module)
8. [Finance Module](#8-finance-module)
9. [Reception Module](#9-reception-module)
10. [Doctor Module](#10-doctor-module)
11. [Common Features](#11-common-features)
12. [Security & Audit](#12-security--audit)

---

1. System Overview

1.1 Introduction
The Sialkot Medical Complex Hospital Management System (HMS) is a comprehensive, multi-module healthcare management platform designed to streamline operations across all departments of a medical facility. The system supports:

- 7 Primary Modules: Hospital, Lab, Diagnostics, Pharmacy, Aesthetic, Finance, Reception
- Role-Based Access Control: Different access levels for administrators, doctors, nurses, receptionists, pharmacists, lab technicians, and finance staff
- Real-Time Data Synchronization: All modules share patient data and maintain audit trails
- Integrated Billing & Finance: Unified financial tracking across all departments
- Biometric Integration: Staff attendance via biometric devices
- FBR Compliance: Federal Board of Revenue integration for tax reporting

1.2 System Architecture
The system is deployed as a desktop application for Windows with web browser access capabilities. It supports both online and offline operation modes with automatic data synchronization.

1.3 Login & Authentication
Each module has its own dedicated login page:
- `/hospital/login` - Hospital module
- `/lab/login` - Lab module
- `/diagnostic/login` - Diagnostics module
- `/pharmacy/login` - Pharmacy module
- `/aesthetic/login` - Aesthetic module
- `/finance/login` - Finance module
- `/reception/login` - Reception module

---

2. Module Access & Navigation

2.1 Home Dashboard
Upon accessing the root URL (`/`), users see the Home Dashboard with 7 module cards:

| Module | Icon | Description | Access URL |
|--------|------|-------------|------------|
| Hospital | Stethoscope | Appointments, admissions, billing, EMR | `/hospital/login` |
| Lab | FlaskConical | Lab orders, tests, results, blood bank | `/lab/login` |
| Diagnostics | FlaskConical | Diagnostic tokens, tests, tracking, reports | `/diagnostic/login` |
| Pharmacy | Pill | Prescriptions, inventory, POS | `/pharmacy/login` |
| Aesthetic | Sparkles | Aesthetic treatments, bookings, billing | `/aesthetic/login` |
| Finance | FileText | Financial management and accounting | `/finance/login` |
| Reception | PhoneIncoming | Front-desk, patient registration, triage | `/reception/login` |

2.2 Common Navigation Patterns
Each module follows a consistent layout pattern:
- Sidebar Navigation: Module-specific menu items
- Top Bar: User info, notifications, logout
- Breadcrumb Navigation: Current location indicator
- Quick Actions: Frequently used functions

---

3. Hospital Module

3.1 Module Overview
The Hospital module is the central management hub for inpatient and outpatient operations, covering:
- Patient Management (OPD & IPD)
- Token System
- Bed Management
- Doctor Management
- Appointment Scheduling
- Equipment Management
- Medical Forms & Certificates
- Corporate Billing
- FBR Integration

3.2 Sub-Modules & Components

3.2.1 Dashboard (`/hospital`)
Purpose: Central command center for hospital operations

Key Metrics Displayed:
- Total Tokens (Daily/Custom range)
- Admissions Count
- Discharges Count
- Active IPD Patients
- Bed Occupancy Rate
- Available Beds
- Staff Attendance (Present/Late)
- Revenue vs Expense Charts
- OPD Revenue
- IPD Revenue
- Doctor Earnings
- Doctor Payouts

Features:
- Date Range Filter: From/To date selection with optional time range
- Shift Filter: Filter by staff shifts (Morning/Evening/Night)
- Auto-Refresh: Data refreshes every 15 seconds
- Manual Refresh: Click refresh icon to reload data
- Revenue Bar Chart: Visual comparison of revenue vs expenses

Workflow:
1. Login to Hospital module
2. Dashboard loads automatically
3. Select date range for historical data
4. View real-time statistics
5. Click any metric card for detailed view

3.2.2 Token Management

3.2.2.1 Token Generator (`/hospital/token-generator`)
Purpose: Generate OPD tokens for patient visits

Key Features:
- Patient Registration (New/Existing)
- Doctor Selection with Specialization
- Token Number Generation
- Fee Collection
- Receipt Printing

Workflow - New Patient:
1. Click "New Patient"
2. Enter Patient Details:
   - Full Name
   - Father/Husband Name
   - CNIC Number
   - Date of Birth
   - Gender
   - Contact Number
   - Address
3. Select Doctor from dropdown
4. System displays Doctor Fee
5. Click "Generate Token"
6. System prints token receipt

Workflow - Existing Patient:
1. Search by MRN (Medical Record Number) or Name
2. Select patient from results
3. Select Doctor
4. Generate Token

3.2.2.2 Today's Tokens (`/hospital/today-tokens`)
Purpose: View and manage all tokens generated today

Features:
- Token List: Shows all tokens with:
  - Token Number
  - Patient Name
  - Doctor Name
  - Status (Waiting/In-Consultation/Completed)
  - Time
  - Actions (View/Edit/Print)
- Status Updates: Mark tokens as in-consultation or completed
- Reprint Receipts: Print duplicate receipts
- Filter by Doctor: View tokens per doctor
- Search: Find tokens by patient name or token number

Status Workflow:
1. Generated → Token created, patient waiting
2. In-Consultation → Doctor started consultation
3. Completed → Consultation finished

3.2.2.3 Token History (`/hospital/token-history`)
Purpose: Historical view of all tokens

Features:
- Date range search
- Filter by doctor
- Filter by status
- Export to Excel
- Print reports
- Revenue summary by date range

3.2.3 IPD (In-Patient Department) Management

3.2.3.1 IPD Dashboard (`/hospital/ipd`)
Purpose: Overview of all admitted patients

Features:
- Active Admissions List: Current in-patients with:
  - Patient Name & MRN
  - Bed Number
  - Admission Date
  - Doctor
  - Status (Admitted/Discharge Pending/Discharged)
  - Balance Due
- Quick Actions: View profile, Add charges, Discharge
- Bed Occupancy Visualization: Color-coded bed status
- Search & Filter: By ward, bed, doctor, patient name

3.2.3.2 Bed Management (`/hospital/bed-management`)
Purpose: Manage hospital beds and wards

Features:
- Bed Grid View: Visual floor plan of beds
- Bed Status: 
  - Available (Green)
  - Occupied (Red)
  - Maintenance (Yellow)
  - Reserved (Blue)
- Bed Assignment: Assign beds to patients during admission
- Bed Transfer: Move patients between beds
- Ward Management: Organize beds by wards/departments
- Bed History: Track bed occupancy history

Workflow - Bed Assignment:
1. Select ward from dropdown
2. View available beds
3. Click on empty bed
4. Select patient (search by MRN)
5. Confirm assignment
6. Bed status changes to "Occupied"

3.2.3.3 Patient Profile (`/hospital/patient/:id`)
Purpose: Complete patient medical record

Sections:
1. Patient Information:
   - Demographics
   - Contact Information
   - Emergency Contacts
   - Insurance/Corporate Details

2. Admission Details:
   - Admission Date/Time
   - Admitting Doctor
   - Referring Doctor
   - Bed Assignment History
   - Admission Notes

3. Clinical Records:
   - Vital Signs History
   - Doctor Visit Notes
   - Nursing Notes
   - Medication Chart
   - Investigation Orders

4. Billing Summary:
   - Room Charges
   - Doctor Visit Charges
   - Procedure Charges
   - Medicine Charges
   - Lab Charges
   - Total Due/Paid

5. Documents:
   - Consent Forms
   - Medical Forms
   - Reports
   - Images/Scans

6. Timeline:
   - Chronological view of all activities

3.2.3.4 Patient List (`/hospital/patient-list`)
Purpose: Master list of all patients

Features:
- Search by Name, MRN, CNIC, Phone
- Filter by Status (Active/Discharged/All)
- Export to Excel
- Print patient summary
- Quick view popup

3.2.3.5 Discharge Wizard (`/hospital/discharge/:id`)
Purpose: Process patient discharge

Steps:
1. Final Bill Calculation:
   - Review all charges
   - Apply any discounts
   - Calculate final balance

2. Medical Clearance:
   - Doctor approval
   - Nursing clearance
   - Equipment return confirmation

3. Discharge Summary:
   - Admission diagnosis
   - Final diagnosis
   - Procedures performed
   - Medications prescribed
   - Follow-up instructions

4. Billing Settlement:
   - Collect balance due
   - Generate final invoice
   - Print discharge slip

5. Bed Release:
   - Mark bed as available
   - Update patient status

3.2.3.6 Discharged Patients (`/hospital/discharged`)
Purpose: View discharged patients history

Features:
- List of all discharged patients
- Discharge date range filter
- Re-admit option
- View discharge summaries
- Print old bills

3.2.3.7 IPD Billing (`/hospital/ipd-billing`)
Purpose: Manage IPD patient billing

Features:
- Charge Entry:
  - Room charges (daily auto-calculation)
  - Doctor visit charges
  - Procedure charges
  - Medicine charges
  - Lab test charges
  - Other services

- Payment Collection:
  - Cash payments
  - Card payments
  - Corporate billing
  - Partial payments
  - Advance payments

- Invoice Generation:
  - Daily summary invoices
  - Final discharge invoices
  - Detailed itemized bills
  - Receipt printing

3.2.3.8 IPD Print Report (`/hospital/patient/:id/print`)
Purpose: Generate printable patient reports

Available Reports:
- Patient Admission Summary
- Billing Summary
- Complete Medical Record
- Discharge Summary
- Investigation Reports

3.2.4 Doctor Management

3.2.4.1 Doctors List (`/hospital/doctors`)
Purpose: Manage hospital doctors

Features:
- Doctor Directory:
  - Name, Specialization
  - Qualification
  - Contact Information
  - Visiting Hours
  - Consultation Fees

- Doctor Types:
  - Visiting Doctors (External)
  - Resident Doctors
  - Specialists
  - Consultants

- Actions:
  - Add new doctor
  - Edit doctor details
  - Set consultation fees
  - Assign departments
  - View doctor's patient list
  - View doctor's revenue

3.2.4.2 Doctor Schedules (`/hospital/doctor-schedules`)
Purpose: Manage doctor availability and schedules

Features:
- Weekly Schedule View:
  - Days and time slots
  - Availability status
  - Maximum appointments per slot

- Schedule Management:
  - Set regular schedule
  - Mark leave days
  - Block time slots
  - Set OPD days/times

- Department-wise View: Filter schedules by department

3.2.4.3 Appointments (`/hospital/appointments`)
Purpose: Manage patient appointments

Features:
- Appointment Calendar:
  - Day/Week/Month view
  - Doctor-wise view
  - Department-wise view

- Appointment Booking:
  - Select doctor
  - Select date/time slot
  - Patient details
  - Purpose of visit
  - Confirmation

- Appointment Status:
  - Scheduled
  - Confirmed
  - Completed
  - Cancelled
  - No-show

- Reminders: SMS/Appointment reminders

3.2.4.4 Doctor Finance (`/hospital/finance/doctors`)
Purpose: Track doctor earnings and finances

Features:
- Earning Summary:
  - Total consultations
  - Total earnings
  - Hospital share
  - Doctor share

- Detailed Breakdown:
  - Date-wise earnings
  - Patient-wise earnings
  - Department-wise earnings

- Date Range Filter: View earnings for custom periods

3.2.4.5 Doctor Payouts (`/hospital/finance/doctor-payouts`)
Purpose: Process doctor payments

Features:
- Payout Calculation:
  - Auto-calculate based on agreed percentage
  - Deduct any advances
  - Calculate net payable

- Payment Processing:
  - Mark as paid
  - Record payment method
  - Generate payment voucher
  - Print payout statement

- Payout History: Track all past payouts

3.2.5 Medical Forms & Certificates

3.2.5.1 Received Death List (`/hospital/forms/received-deaths`)
Purpose: Track received death cases

Features:
- List of all death cases
- Patient details
- Date/time of death
- Cause of death
- Action: Generate death certificate

3.2.5.2 Death Certificate List (`/hospital/forms/death-certificates`)
Purpose: Manage issued death certificates

Features:
- List of all death certificates issued
- Certificate number tracking
- Patient details
- Date of issue
- Print certificate

3.2.5.3 Birth Certificate List (`/hospital/forms/birth-certificates`)
Purpose: Manage birth certificates

Features:
- List of births recorded
- Baby details
- Parent details
- Date of birth
- Certificate printing

3.2.5.4 Short Stay List (`/hospital/forms/short-stays`)
Purpose: Track short stay admissions (< 24 hours)

Features:
- Short stay patient list
- Admission/discharge times
- Procedures performed
- Billing summary

3.2.5.5 Discharge Summary List (`/hospital/forms/discharge-summaries`)
Purpose: Access all discharge summaries

Features:
- Search by patient name/MRN
- Filter by date range
- View complete discharge summary
- Print discharge summary
- Export to PDF

3.2.5.6 Invoice List (`/hospital/forms/invoices`)
Purpose: Central invoice repository

Features:
- All IPD invoices
- Search and filter
- Re-print invoices
- Cancel/void invoices (admin only)
- Invoice audit trail

3.2.6 Equipment Management

3.2.6.1 Equipment Dashboard (`/hospital/equipment`)
Purpose: Hospital equipment inventory

Features:
- Equipment List:
  - Equipment name, type
  - Serial number
  - Purchase date
  - Warranty status
  - Location

- Maintenance Schedule:
  - Upcoming maintenance
  - Overdue maintenance
  - Last service date

- Status Tracking:
  - Active
  - Under Maintenance
  - Condemned
  - Transferred

3.2.6.2 Equipment Due (`/hospital/equipment-due`)
Purpose: Track equipment maintenance due

Features:
- List of equipment with upcoming maintenance
- Maintenance type (PM/Calibration/Inspection)
- Due date
- Assigned technician
- Mark maintenance completed

3.2.6.3 Equipment KPIs (`/hospital/equipment/kpis`)
Purpose: Equipment performance metrics

Metrics:
- Equipment utilization rate
- Downtime percentage
- Maintenance cost per equipment
- Breakdown frequency
- Availability percentage

3.2.6.4 Breakdown Register (`/hospital/equipment/breakdown-register`)
Purpose: Log equipment breakdowns

Features:
- Record breakdown incidents
- Equipment details
- Breakdown date/time
- Description of problem
- Repair status
- Downtime duration

3.2.6.5 Condemnation Register (`/hospital/equipment/condemnation-register`)
Purpose: Track condemned/discarded equipment

Features:
- List of condemned equipment
- Condemnation date
- Reason for condemnation
- Asset value at condemnation
- Disposal method

3.2.7 Store Management (`/hospital/store-management`)
Purpose: Hospital general store inventory

Features:
- Inventory Items:
  - Medical supplies
  - General supplies
  - Equipment parts
  - Stationery

- Stock Management:
  - Add new items
  - Update stock levels
  - Set reorder points
  - Track consumption

- Purchase Management:
  - Create purchase orders
  - Receive stock
  - Return to supplier
  - Track supplier payments

- Stock Alerts:
  - Low stock warnings
  - Expiry date alerts
  - Reorder notifications

3.2.8 Departments (`/hospital/departments`)
Purpose: Manage hospital departments

Features:
- Department List:
  - Department name
  - Department head
  - Contact details
  - Associated doctors
  - Associated wards

- Department Management:
  - Add/edit departments
  - Assign doctors
  - Assign wards/beds
  - Set department-specific settings

3.2.9 Search Patients (`/hospital/search-patients`)
Purpose: Global patient search

Features:
- Multi-field Search:
  - Name
  - MRN (Medical Record Number)
  - CNIC
  - Phone number
  - Email

- Advanced Filters:
  - Admission status
  - Date range
  - Doctor
  - Department

- Search Results:
  - Quick view of patient info
  - Direct links to patient profile
  - Export results

3.2.10 IPD Referrals (`/hospital/ipd-referrals`)
Purpose: Track internal department referrals

Features:
- Referral List:
  - Patient details
  - Referring doctor/department
  - Referred to doctor/department
  - Referral reason
  - Status

- Referral Workflow:
  - Create referral
  - Accept/decline referral
  - Transfer patient records
  - Update referral status

3.2.11 Corporate Panel

3.2.11.1 Corporate Dashboard (`/hospital/corporate`)
Purpose: Overview of corporate billing

Features:
- Active corporate contracts
- Pending claims summary
- Corporate revenue metrics
- Top corporate clients

3.2.11.2 Corporate Companies (`/hospital/corporate/companies`)
Purpose: Manage corporate clients

Features:
- Company List:
  - Company name
  - Contact person
  - Contact details
  - Contract type
  - Credit limit

- Company Details:
  - Associated employees/patients
  - Billing history
  - Outstanding balance
  - Contract terms

- Actions:
  - Add new company
  - Edit company details
  - View company patients
  - Generate company reports

3.2.11.3 Corporate Rate Rules (`/hospital/corporate/rate-rules`)
Purpose: Set corporate billing rates

Features:
- Rate Rules:
  - Service-wise rates
  - Discount percentages
  - Special packages
  - Room rate rules

- Rule Management:
  - Create rate rules
  - Assign to companies
  - Set validity periods
  - Priority ordering

3.2.11.4 Corporate Transactions (`/hospital/corporate/transactions`)
Purpose: View all corporate transactions

Features:
- Transaction list
- Company-wise grouping
- Date range filter
- Export to Excel
- Print transaction report

3.2.11.5 Corporate Claims (`/hospital/corporate/claims`)
Purpose: Manage corporate billing claims

Features:
- Claim List:
  - Claim number
  - Company
  - Patient
  - Services included
  - Amount
  - Status

- Claim Status:
  - Draft
  - Submitted
  - Approved
  - Rejected
  - Paid

- Actions:
  - Create claim
  - Submit claim
  - Track claim status
  - Process payment

3.2.11.6 Corporate Payments (`/hospital/corporate/payments`)
Purpose: Process corporate payments

Features:
- Payment Recording:
  - Company selection
  - Payment amount
  - Payment method
  - Payment date
  - Against which claims

- Payment History:
  - All payments made
  - Outstanding balance
  - Aging report

3.2.11.7 Corporate Reports (`/hospital/corporate/reports`)
Purpose: Generate corporate billing reports

Reports Available:
- Company-wise revenue
- Monthly corporate billing
- Outstanding claims report
- Company utilization report
- Corporate vs cash revenue comparison

3.2.12 FBR Integration Panel

3.2.12.1 FBR Dashboard (`/hospital/fbr`)
Purpose: FBR tax reporting overview

Features:
- Sales Summary:
  - Taxable sales
  - Tax collected
  - Exempt sales

- Invoice Summary:
  - Total invoices
  - Invoices synced to FBR
  - Pending sync

- Compliance Status:
  - Last sync time
  - Sync errors (if any)
  - Connection status

3.2.12.2 FBR Settings (`/hospital/fbr/settings`)
Purpose: Configure FBR integration

Settings:
- FBR POS ID
- API credentials
- Sync frequency
- Tax rates
- Default tax behavior

3.2.12.3 FBR Logs (`/hospital/fbr/logs`)
Purpose: View FBR sync logs

Features:
- Log Entries:
  - Timestamp
  - Invoice details
  - Sync status
  - Success/Error message
  - API response

- Actions:
  - Filter by date
  - Filter by status
  - Retry failed syncs
  - Export logs

3.2.12.4 FBR Reports (`/hospital/fbr/reports`)
Purpose: Generate FBR compliance reports

Reports:
- Monthly tax summary
- Invoice-wise tax detail
- Product-wise tax report
- Category-wise tax report

3.2.12.5 FBR Credentials (`/hospital/fbr/credentials`)
Purpose: Manage FBR API credentials

Features:
- Store FBR API credentials securely
- Test connection
- Update credentials
- View credential expiry

3.2.13 Staff Management

3.2.13.1 Staff Attendance (`/hospital/staff-attendance`)
Purpose: Staff attendance tracking

Features:
- Daily Attendance:
  - Present/Absent/Late/Leave
  - Check-in/out times
  - Biometric verification

- Mark Attendance:
  - Manual entry
  - Biometric sync
  - Bulk mark attendance

- Attendance Reports:
  - Daily summary
  - Monthly summary
  - Individual attendance history

3.2.13.2 Staff Dashboard (`/hospital/staff-dashboard`)
Purpose: Individual staff view

Features:
- My attendance record
- My earnings
- My schedule
- Pending tasks
- Notifications

3.2.13.3 Staff Management (`/hospital/staff-management`)
Purpose: Manage hospital staff

Features:
- Staff Directory:
  - Personal details
  - Contact information
  - Designation
  - Department
  - Joining date
  - Salary details

- Staff Types:
  - Doctors
  - Nurses
  - Technicians
  - Administrative
  - Support staff

- Actions:
  - Add new staff
  - Edit staff details
  - Manage documents
  - View attendance
  - View earnings

3.2.13.4 Staff Settings (`/hospital/staff-settings`)
Purpose: Configure staff management settings

Settings:
- Shift timings
- Salary calculation rules
- Overtime rules
- Leave policies
- Attendance rules

3.2.13.5 Staff Monthly (`/hospital/staff-monthly`)
Purpose: Monthly staff reports

Features:
- Monthly attendance summary
- Monthly earnings calculation
- Salary sheet generation
- Payslip printing
- Export to payroll system

3.2.14 Finance Operations

3.2.14.1 Expense History (`/hospital/finance/expenses`)
Purpose: Track hospital expenses

Features:
- Expense Entry:
  - Expense category
  - Amount
  - Date
  - Vendor/Payee
  - Description
  - Receipt attachment

- Expense Categories:
  - Utilities
  - Salaries
  - Maintenance
  - Supplies
  - Rent
  - Other

- Reports:
  - Category-wise summary
  - Monthly expenses
  - Vendor-wise expenses

3.2.14.2 Transactions (`/hospital/finance/transactions`)
Purpose: View all financial transactions

Features:
- Transaction List:
  - Date
  - Description
  - Debit/Credit
  - Amount
  - Balance
  - Reference

- Filters:
  - Date range
  - Transaction type
  - Department

- Export: Excel/PDF export

3.2.14.3 Cash Sessions (`/hospital/finance/cash-sessions`)
Purpose: Manage cash counter sessions

Features:
- Session Management:
  - Open session
  - Close session
  - Handover between shifts

- Cash Tracking:
  - Opening balance
  - Collections
  - Payments
  - Closing balance
  - Variance calculation

- Session Report:
  - Transaction summary
  - Cash denomination count
  - Discrepancy report

3.2.15 Administration

3.2.15.1 User Management (`/hospital/user-management`)
Purpose: Manage system users

Features:
- User List:
  - Username
  - Full name
  - Role
  - Department
  - Status (Active/Inactive)

- Roles:
  - Super Admin
  - Admin
  - Doctor
  - Receptionist
  - Nurse
  - Cashier
  - Lab Technician
  - Pharmacist

- Actions:
  - Add user
  - Edit user
  - Reset password
  - Enable/disable user
  - Assign roles

3.2.15.2 Sidebar Permissions (`/hospital/sidebar-permissions`)
Purpose: Configure menu access permissions

Features:
- Role-based Permissions:
  - Select role
  - Enable/disable menu items
  - Set view/edit permissions

- Menu Items:
  - All sidebar menu options
  - Nested submenu items
  - Action buttons

- Apply to Users: Apply permission set to users

3.2.15.3 Audit Logs (`/hospital/audit`)
Purpose: System activity tracking

Features:
- Log Entries:
  - Timestamp
  - User
  - Action performed
  - Module
  - Record affected
  - Old value
  - New value
  - IP address

- Filters:
  - Date range
  - User
  - Module
  - Action type

- Export: Export audit logs

3.2.15.4 Settings (`/hospital/settings`)
Purpose: Hospital configuration

Settings Categories:
- General: Hospital name, address, contact
- Billing: Default tax rates, billing formats
- Departments: Department configuration
- Wards: Ward and bed configuration
- Services: Service pricing
- Notifications: Email/SMS settings
- Backup: Backup settings
- Integration: Third-party integrations

3.2.15.5 Backup (`/hospital/backup`)
Purpose: Data backup management

Features:
- Manual Backup: Trigger immediate backup
- Scheduled Backup: Configure auto-backup
- Backup History: View past backups
- Restore: Restore from backup
- Download: Download backup files

---

4. Lab Module

4.1 Module Overview
The Lab module manages all laboratory operations including:
- Test orders and sample tracking
- Result entry and reporting
- Inventory management
- Blood bank operations
- Quality control
- Billing integration

4.2 Sub-Modules & Components

4.2.1 Dashboard (`/lab`)
Purpose: Lab operations overview

Key Metrics:
- Pending samples
- Completed tests today
- Critical results
- Revenue today
- Tests by department

4.2.2 Test Management (`/lab/tests`)
Purpose: Manage laboratory tests

Features:
- Test Catalog:
  - Test name
  - Test code
  - Department (Hematology, Biochemistry, etc.)
  - Normal ranges
  - Price
  - Turnaround time

- Test Groups: Organize tests into panels/profiles
- Test Parameters: Define individual test parameters

4.2.3 Sample Intake (`/lab/orders`)
Purpose: Receive and register samples

Workflow:
1. Sample Reception:
   - Scan or enter order ID
   - Verify patient details
   - Check test requirements

2. Sample Registration:
   - Assign sample ID/barcode
   - Record collection time
   - Label printing

3. Sample Acceptance/Rejection:
   - Check sample quality
   - Accept or reject with reason
   - Notify referring department

4.2.4 Sample Tracking (`/lab/tracking`)
Purpose: Track sample through lab workflow

Features:
- Status Tracking:
  - Received
  - Processing
  - Analysis
  - QC Review
  - Authorized
  - Reported

- Location Tracking: Track sample location in lab
- Turnaround Time: Monitor TAT for each sample
- Alerts: Overdue sample alerts

4.2.5 Results Entry (`/lab/results`)
Purpose: Enter test results

Features:
- Worklist View: Pending results list
- Result Entry Form:
  - Patient details
  - Test parameters
  - Result value entry
  - Units
  - Reference ranges (auto-display)
  - Flags (High/Low/Critical)
  - Comments

- Auto-validation: Results within range auto-validate
- Critical Alerts: Flag critical values
- Delta Check: Compare with previous results

4.2.6 Report Approval (`/lab/report-approval`)
Purpose: Review and approve lab reports

Features:
- Pending Approval List: Results awaiting authorization
- Review Interface:
  - View results
  - Compare with history
  - Add comments
  - Approve/Reject

- Digital Signature: Authorized signatory approval
- Auto-approval: Rules for auto-approval

4.2.7 Report Generator (`/lab/reports`)
Purpose: Generate and print lab reports

Features:
- Report Templates: 
  - Standard format
  - Department-specific formats
  - Hospital letterhead

- Report Distribution:
  - Print
  - Email
  - SMS notification
  - Portal access

- Historical Reports: Access old reports

4.2.8 Appointments (`/lab/appointments`)
Purpose: Manage lab test appointments

Features:
- Appointment Booking:
  - Patient details
  - Test selection
  - Date/time slot
  - Fasting requirements
  - Preparation instructions

- Appointment Calendar: View all appointments
- Reminders: SMS/email reminders

4.2.9 Lab Reports (`/lab/reports-summary`)
Purpose: Lab analytics and statistics

Reports:
- Daily test count
- Revenue report
- Test-wise statistics
- Doctor-wise referrals
- TAT analysis
- Quality indicators

4.2.10 Inventory Management (`/lab/inventory`)
Purpose: Lab reagents and consumables

Features:
- Item Master:
  - Reagent name
  - Manufacturer
  - Lot number
  - Expiry date
  - Stock quantity

- Stock Management:
  - Stock in (receipt)
  - Stock out (consumption)
  - Stock adjustment

- Alerts:
  - Low stock alerts
  - Expiry alerts
  - Reorder reminders

4.2.11 Suppliers (`/lab/suppliers`)
Purpose: Manage lab suppliers

Features:
- Supplier directory
- Contact details
- Supply history
- Payment tracking

4.2.12 Purchase History (`/lab/purchase-history`)
Purpose: Track lab purchases

Features:
- Purchase order list
- Receive stock
- Invoice tracking
- Payment status

4.2.13 Returns (`/lab/return-history`, `/lab/supplier-returns`)
Purpose: Manage returns to suppliers

Features:
- Create return
- Reason for return
- Credit note tracking
- Return history

4.2.14 Blood Bank

4.2.14.1 Donors (`/lab/bb/donors`)
Purpose: Blood donor management

Features:
- Donor Registration:
  - Personal details
  - Medical history
  - Blood group
  - Contact information
  - Previous donations

- Donor Eligibility:
  - Last donation date check
  - Medical screening
  - Eligibility status

- Donation History:
  - All donations by donor
  - Bag numbers
  - Test results

4.2.14.2 Inventory (`/lab/bb/inventory`)
Purpose: Blood bag inventory

Features:
- Stock View:
  - Blood group-wise stock
  - Bag type (Whole blood/Components)
  - Expiry dates
  - Location

- Bag Lifecycle:
  - Collection
  - Testing
  - Quarantine
  - Available
  - Issued
  - Discarded

- Alerts:
  - Low stock alerts
  - Expiry alerts
  - Cross-match pending

4.2.14.3 Receivers (`/lab/bb/receivers`)
Purpose: Blood issue to patients

Features:
- Blood Request:
  - Patient details
  - Required blood group
  - Component type
  - Urgency

- Cross-matching:
  - Cross-match results
  - Compatibility status

- Blood Issue:
  - Bag selection
  - Issue documentation
  - Charge calculation

4.2.15 Finance Operations

4.2.15.1 Expenses (`/lab/expenses`)
Track lab-specific expenses

4.2.15.2 Pay In/Out (`/lab/pay-in-out`)
Cash movement tracking

4.2.15.3 Manager Cash Count (`/lab/manager-cash-count`)
End-of-shift cash verification

4.2.16 Staff Management
Same structure as Hospital module:
- Staff Attendance (`/lab/staff-attendance`)
- Staff Management (`/lab/staff-management`)
- Staff Settings (`/lab/staff-settings`)
- Staff Monthly (`/lab/staff-monthly`)

4.2.17 Administration
- User Management (`/lab/user-management`)
- Sidebar Permissions (`/lab/sidebar-permissions`)
- Audit Logs (`/lab/audit-logs`)
- Settings (`/lab/settings`)
- Referrals (`/lab/referrals`)

---

5. Diagnostics Module

5.1 Module Overview
The Diagnostics module handles diagnostic imaging and specialized tests:
- Radiology (X-Ray, CT, MRI, Ultrasound)
- Cardiology diagnostics
- Other specialized diagnostics
- Token-based patient flow
- Sample tracking

5.2 Sub-Modules & Components

5.2.1 Dashboard (`/diagnostic`)
Purpose: Diagnostic center overview

Metrics:
- Tokens today
- Pending scans
- Completed studies
- Revenue
- Machine utilization

5.2.2 Token Generator (`/diagnostic/token-generator`)
Purpose: Generate diagnostic tokens

Workflow:
1. Select diagnostic type (X-Ray, CT, MRI, etc.)
2. Select patient (new/existing)
3. Select referring doctor
4. Enter clinical history
5. Collect payment
6. Generate token with time slot

5.2.3 Tests (`/diagnostic/tests`)
Purpose: Manage diagnostic procedures

Features:
- Procedure Catalog:
  - Procedure name
  - Modality
  - Duration
  - Price
  - Preparation requirements

- Contrast Management:
  - Contrast protocols
  - Allergy screening
  - Contrast usage tracking

5.2.4 Sample Tracking (`/diagnostic/sample-tracking`)
Purpose: Track patient flow and samples

Features:
- Patient waiting list
- Procedure room assignment
- Status updates (Waiting/Preparation/In-Progress/Completed)
- Image upload tracking

5.2.5 Result Entry (`/diagnostic/result-entry`)
Purpose: Enter diagnostic reports

Features:
- Template-based Reporting:
  - Pre-defined templates
  - Free text entry
  - Structured findings

- Image Management:
  - Upload study images
  - Image annotation
  - Image series management

- Report Distribution:
  - Print reports
  - Email to referring doctor
  - Patient portal upload

5.2.6 Report Generator (`/diagnostic/report-generator`)
Purpose: Generate diagnostic reports

Features:
- Report templates
- Doctor signature integration
- Report printing
- Digital distribution

5.2.7 Referrals (`/diagnostic/referrals`)
Purpose: Track referring doctors

Features:
- Referring doctor list
- Referral statistics
- Commission tracking (if applicable)

5.2.8 Administration
- User Management (`/diagnostic/user-management`)
- Sidebar Permissions (`/diagnostic/sidebar-permissions`)
- Audit Logs (`/diagnostic/audit-logs`)
- Settings (`/diagnostic/settings`)

---

6. Pharmacy Module

6.1 Module Overview
The Pharmacy module manages medication dispensing and inventory:
- Point of Sale (POS) operations
- Prescription management
- Inventory control
- Supplier management
- Sales tracking

6.2 Sub-Modules & Components

6.2.1 Dashboard (`/pharmacy`)
Purpose: Pharmacy operations overview

Metrics:
- Today's sales
- Prescriptions processed
- Low stock alerts
- Pending prescriptions
- Revenue comparison

6.2.2 POS (`/pharmacy/pos`)
Purpose: Point of Sale for medication sales

Features:
- Sales Modes:
  - Walk-in sales
  - Prescription sales
  - Return sales

- Product Search:
  - By name
  - By generic name
  - By barcode
  - By category

- Cart Management:
  - Add/remove items
  - Quantity adjustment
  - Discount application
  - Price override (authorized users)

- Payment:
  - Cash
  - Card
  - Credit (corporate patients)
  - Multiple payment methods

- Receipt:
  - Print receipt
  - Email receipt
  - SMS receipt

Workflow - Walk-in Sale:
1. Search for medicine
2. Select product
3. Enter quantity
4. Add to cart
5. Repeat for more items
6. Click "Checkout"
7. Select payment method
8. Complete payment
9. Print receipt

6.2.3 Prescriptions (`/pharmacy/prescriptions`)
Purpose: View pending prescriptions

Features:
- Prescription List:
  - Doctor name
  - Patient name
  - Date
  - Status (Pending/Dispensed/Partial)

- Prescription Detail:
  - Medicines prescribed
  - Dosage instructions
  - Quantity
  - Generic alternatives

- Dispensing:
  - Mark as dispensed
  - Record batch numbers
  - Print label

6.2.4 Prescription Intake (`/pharmacy/prescriptions/:id`)
Purpose: Process individual prescriptions

Features:
- View prescription details
- Check stock availability
- Suggest alternatives if out of stock
- Calculate total
- Process payment
- Update prescription status

6.2.5 Inventory (`/pharmacy/inventory`)
Purpose: Medicine stock management

Features:
- Stock View:
  - Product list with stock levels
  - Batch-wise stock
  - Expiry tracking
  - Reorder levels

- Stock Operations:
  - Stock adjustment
  - Stock transfer
  - Stock take/physical count

- Product Master:
  - Product name
  - Generic name
  - Manufacturer
  - Category
  - Schedule (H1, H, etc.)
  - Price
  - Reorder level

- Add Invoice (`/pharmacy/inventory/add-invoice`):
  - Create purchase invoice
  - Add items with batch/expiry
  - Calculate totals
  - Save and update stock

- Edit Invoice (`/pharmacy/inventory/edit-invoice/:id`):
  - Modify existing purchase
  - Update quantities
  - Correct errors

6.2.6 Customers (`/pharmacy/customers`)
Purpose: Customer management

Features:
- Customer database
- Purchase history
- Outstanding payments
- Loyalty tracking

6.2.7 Suppliers (`/pharmacy/suppliers`)
Purpose: Medicine supplier management

Features:
- Supplier directory
- Contact details
- Supply history
- Payment terms
- Outstanding payments

6.2.8 Companies (`/pharmacy/companies`)
Purpose: Pharmaceutical companies

Features:
- Company master
- Products by company
- Purchase history

6.2.9 Sales History (`/pharmacy/sales-history`)
Purpose: Track all sales

Features:
- Sales list
- Date range filter
- Product-wise sales
- Payment mode-wise sales
- Return/void tracking
- Export to Excel

6.2.10 Purchase History (`/pharmacy/purchase-history`)
Purpose: Track medicine purchases

Features:
- Purchase invoice list
- Supplier-wise purchases
- Date range filter
- Payment status
- GRN (Goods Receipt Note) tracking

6.2.11 Return History (`/pharmacy/return-history`)
Purpose: Customer returns

Features:
- Return list
- Reason tracking
- Refund processing
- Stock reversal

6.2.12 Reports (`/pharmacy/reports`)
Purpose: Pharmacy analytics

Reports:
- Daily sales report
- Product-wise sales
- Expiry report
- Stock valuation
- Profit analysis
- Fast/slow moving items
- Supplier-wise purchases

6.2.13 Supplier Returns (`/pharmacy/supplier-returns`)
Purpose: Return to suppliers

Features:
- Create return
- Select invoice
- Select items
- Reason for return
- Credit note tracking

6.2.14 Customer Returns (`/pharmacy/customer-returns`)
Purpose: Process customer returns

Features:
- Search original sale
- Select items to return
- Reason capture
- Refund calculation
- Stock update

6.2.15 Referrals (`/pharmacy/referrals`)
Purpose: Doctor referrals tracking

Features:
- Referring doctors
- Prescription count
- Revenue from referrals

6.2.16 Notifications (`/pharmacy/notifications`)
Purpose: Pharmacy alerts

Alerts:
- Low stock
- Expiring medicines
- Pending prescriptions
- System notifications

6.2.17 Expenses (`/pharmacy/expenses`)
Purpose: Pharmacy expenses

Features:
- Expense entry
- Categories
- Vendor tracking
- Reports

6.2.18 Pay In/Out (`/pharmacy/pay-in-out`)
Purpose: Cash movement

Features:
- Cash pay-in
- Cash pay-out
- Reason capture
- Receipt generation

6.2.19 Manager Cash Count (`/pharmacy/manager-cash-count`)
Purpose: Cash verification

Features:
- Denomination-wise count
- System balance comparison
- Variance reporting
- Sign-off

6.2.20 Staff Management
- Staff Attendance (`/pharmacy/staff-attendance`)
- Staff Management (`/pharmacy/staff-management`)
- Staff Settings (`/pharmacy/staff-settings`)
- Staff Monthly (`/pharmacy/staff-monthly`)

6.2.21 Guidelines (`/pharmacy/guidelines`)
Purpose: Pharmacy SOPs and guidelines

Features:
- Display standard operating procedures
- Drug interaction alerts
- Dosage guidelines
- Storage requirements

6.2.22 Administration
- User Management (`/pharmacy/user-management`)
- Sidebar Permissions (`/pharmacy/sidebar-permissions`)
- Audit Logs (`/pharmacy/audit-logs`)
- Settings (`/pharmacy/settings`)

---

7. Aesthetic Module

7.1 Module Overview
The Aesthetic module manages cosmetic and aesthetic procedures:
- Treatment bookings
- Procedure catalog
- Patient consent management
- Inventory for aesthetic products
- Doctor management
- Billing for aesthetic services

7.2 Sub-Modules & Components

7.2.1 Dashboard (`/aesthetic`)
Purpose: Aesthetic center overview

Metrics:
- Today's appointments
- Upcoming procedures
- Revenue today
- Popular treatments
- Inventory alerts

7.2.2 Token Management

7.2.2.1 Token Generator (`/aesthetic/token-generator`)
Purpose: Generate tokens for aesthetic consultations

Workflow:
1. Select treatment type
2. Select/consult doctor
3. Patient registration
4. Collect consultation fee
5. Generate token

7.2.2.2 Today's Tokens (`/aesthetic/today-tokens`)
Purpose: View today's tokens

Features:
- Token list
- Status tracking
- Doctor assignment
- Queue management

7.2.2.3 Token History (`/aesthetic/token-history`)
Purpose: Historical token data

Features:
- Date range search
- Revenue summary
- Treatment-wise analysis

7.2.3 Patients (`/aesthetic/patients`)
Purpose: Aesthetic patient management

Features:
- Patient directory
- Treatment history
- Before/after photos
- Consent forms status
- Outstanding payments

7.2.4 Patient Profile (`/aesthetic/patients/mrn/:mrn`)
Purpose: Detailed patient record

Sections:
- Personal details
- Medical history
- Allergies
- Previous treatments
- Consent forms
- Photo gallery
- Payment history

7.2.5 Inventory (`/aesthetic/inventory`)
Purpose: Aesthetic products inventory

Features:
- Product Categories:
  - Fillers
  - Botox
  - Skincare products
  - Equipment consumables
  - Laser supplies

- Stock Management:
  - Add invoice (`/aesthetic/inventory/add-invoice`)
  - Stock tracking
  - Batch/expiry management
  - Reorder alerts

7.2.6 Reports (`/aesthetic/reports`)
Purpose: Aesthetic center analytics

Reports:
- Revenue by treatment
- Doctor performance
- Product usage
- Patient statistics
- Appointment trends

7.2.7 Return History (`/aesthetic/return-history`)
Purpose: Product returns

Features:
- Customer returns
- Supplier returns
- Credit tracking

7.2.8 Suppliers (`/aesthetic/suppliers`)
Purpose: Aesthetic product suppliers

Features:
- Supplier directory
- Product catalog
- Purchase history

7.2.9 Purchase History (`/aesthetic/purchase-history`)
Purpose: Track purchases

Features:
- Invoice list
- Supplier-wise
- Product-wise
- Payment tracking

7.2.10 Expenses (`/aesthetic/expenses`)
Purpose: Track expenses

7.2.11 Doctor Management

7.2.11.1 Doctor Management (`/aesthetic/doctor-management`)
Purpose: Manage aesthetic doctors

Features:
- Doctor profiles
- Specializations
- Consultation fees
- Commission rates
- Schedule management

7.2.11.2 Doctor Schedules (`/aesthetic/doctor-schedules`)
Purpose: Manage availability

Features:
- Weekly schedule
- Appointment slots
- Block time

7.2.11.3 Appointments (`/aesthetic/appointments`)
Purpose: Appointment booking

Features:
- Calendar view
- Online booking integration
- Reminders
- Recurring appointments

7.2.11.4 Doctor Finance (`/aesthetic/doctor-finance`)
Purpose: Track doctor earnings

Features:
- Procedure-wise earnings
- Commission calculation
- Payout summary

7.2.11.5 Doctor Payouts (`/aesthetic/doctor-payouts`)
Purpose: Process payments

Features:
- Payout calculation
- Payment processing
- History tracking

7.2.12 Notifications (`/aesthetic/notifications`)
Purpose: System alerts

Alerts:
- Upcoming appointments
- Low stock
- Consent expiring
- Payment reminders

7.2.13 Consent Templates (`/aesthetic/consent-templates`)
Purpose: Manage consent forms

Features:
- Template creation
- Procedure-specific forms
- Digital signature
- Form versioning

7.2.14 Procedure Catalog (`/aesthetic/procedure-catalog`)
Purpose: Aesthetic services

Features:
- Procedure list
- Pricing
- Duration
- Required products
- Preparation instructions

7.2.15 Supplier Returns (`/aesthetic/supplier-returns`)
Purpose: Return to suppliers

7.2.16 Staff Management
- Staff Attendance (`/aesthetic/staff-attendance`)
- Staff Management (`/aesthetic/staff-management`)
- Staff Settings (`/aesthetic/staff-settings`)
- Staff Monthly (`/aesthetic/staff-monthly`)
- Staff Dashboard (`/aesthetic/staff-dashboard`)

7.2.17 Administration
- User Management (`/aesthetic/user-management`)
- Sidebar Permissions (`/aesthetic/sidebar-permissions`)
- Audit Logs (`/aesthetic/audit-logs`)
- Settings (`/aesthetic/settings`)

---

8. Finance Module

8.1 Module Overview
The Finance module provides comprehensive financial management:
- General ledger
- Voucher management
- Trial balance
- Balance sheet
- Vendor management
- Expense tracking
- Financial reporting

8.2 Sub-Modules & Components

8.2.1 Finance Dashboard (`/finance`)
Purpose: Financial overview

Metrics:
- Cash position
- Bank balances
- Outstanding receivables
- Outstanding payables
- Daily collections
- Daily expenses

8.2.2 Transactions (`/finance/transactions`)
Purpose: View all transactions

Features:
- Transaction list
- Account-wise filter
- Date range
- Export to Excel
- Drill-down to vouchers

8.2.3 Expense History (`/finance/expenses`)
Purpose: Expense tracking

Features:
- Expense list
- Category-wise summary
- Vendor-wise summary
- Approval workflow
- Receipt attachments

8.2.4 Doctor Payouts (`/finance/doctor-payouts`)
Purpose: Process doctor payments

Features:
- Consolidated view from all modules
- Payout calculation
- Payment processing
- Voucher generation

8.2.5 Pharmacy/Lab Reports (`/finance/pharmacy-reports`, `/finance/lab-reports`)
Purpose: View departmental reports

Features:
- Revenue summaries
- Cross-module access

8.2.6 Dashboards Access (`/finance/*-dashboard`)
Purpose: Access to all module dashboards

Available:
- Diagnostics dashboard
- Staff dashboard
- Hospital dashboard

8.2.7 Vendors (`/finance/vendors`)
Purpose: Vendor management

Features:
- Vendor directory
- Contact details
- Payment terms
- Outstanding balance
- Payment history

8.2.8 Trial Balance (`/finance/trial-balance`)
Purpose: Generate trial balance

Features:
- Account-wise balances
- Debit/credit totals
- As of date selection
- Export/Print

8.2.9 Balance Sheet (`/finance/balance-sheet`)
Purpose: Generate balance sheet

Features:
- Assets
- Liabilities
- Equity
- As of date
- Comparison with previous period

8.2.10 Ledger (`/finance/ledger`)
Purpose: Account ledger

Features:
- Account selection
- Date range
- Transaction details
- Running balance
- Export/Print

8.2.11 Vouchers (`/finance/vouchers`)
Purpose: Voucher management

Features:
- Voucher Types:
  - Receipt voucher
  - Payment voucher
  - Journal voucher
  - Contra voucher

- Voucher Entry:
  - Date
  - Reference number
  - Account selection
  - Debit/Credit amounts
  - Narration
  - Attachments

- Voucher List:
  - All vouchers
  - Date filter
  - Type filter
  - Edit/Delete (if not posted)

8.2.12 Recurring (`/finance/recurring`)
Purpose: Recurring transactions

Features:
- Set up recurring entries
- Auto-post on schedule
- Monthly/Weekly/Yearly
- Notification before posting

8.2.13 Combined Summary (`/finance/combined`)
Purpose: Consolidated view

Features:
- All departments revenue
- Expense summary
- Net position
- Trend analysis

8.2.14 Liabilities (`/finance/liabilities`)
Purpose: Track liabilities

Features:
- Outstanding payables
- Loan tracking
- EMI schedule
- Interest calculation

8.2.15 Administration
- User Management (`/finance/user-management`)
- Sidebar Permissions (`/finance/sidebar-permissions`)
- Audit Logs (`/finance/audit-logs`)

---

9. Reception Module

9.1 Module Overview
The Reception module serves as the front desk interface:
- Patient registration
- Token generation
- IPD billing access
- Cross-module sample intake
- Cash collection

9.2 Sub-Modules & Components

9.2.1 Token Generator (`/reception`, `/reception/token-generator`)
Purpose: Main reception token generation

Features:
- Hospital OPD tokens
- Quick patient registration
- Doctor selection
- Fee collection
- Receipt printing

9.2.2 Today's Tokens (`/reception/today-tokens`)
Purpose: View and manage today's tokens

Features:
- Token queue
- Status updates
- Doctor assignment
- Re-print receipts

9.2.3 IPD Billing (`/reception/ipd-billing`)
Purpose: Access to IPD billing

Features:
- Search admitted patients
- Collect payments
- Print interim bills
- View payment history

9.2.4 IPD Transactions (`/reception/ipd-transactions`)
Purpose: IPD payment processing

Features:
- Payment entry
- Multiple payment modes
- Receipt generation
- Balance updates

9.2.5 Lab Sample Intake (`/reception/lab/sample-intake`)
Purpose: Receive lab samples

Features:
- Sample registration
- Barcode generation
- Label printing
- Send to lab

9.2.6 Lab Tracking (`/reception/lab/sample-tracking`)
Purpose: Track sample status

Features:
- Status view
- Location tracking
- Results notification

9.2.7 Lab Manager Cash Count (`/reception/lab/manager-cash-count`)
Purpose: Cash verification for lab collections

9.2.8 Diagnostic Token Generator (`/reception/diagnostic/token-generator`)
Purpose: Generate diagnostic tokens

Features:
- Select diagnostic type
- Patient registration
- Time slot booking
- Payment collection

9.2.9 Diagnostic Sample Tracking (`/reception/diagnostic/sample-tracking`)
Purpose: Track diagnostic patients

9.2.10 Administration
- User Management (`/reception/user-management`)
- Sidebar Permissions (`/reception/sidebar-permissions`)

---

10. Doctor Module

10.1 Module Overview
The Doctor module provides a dedicated interface for doctors:
- Patient list
- Prescription writing
- Prescription history
- Medical reports
- Notifications

10.2 Sub-Modules & Components

10.2.1 Dashboard (`/doctor`)
Purpose: Doctor's daily overview

Metrics:
- Today's appointments
- Pending consultations
- Patient count
- Notifications

10.2.2 Patients (`/doctor/patients`)
Purpose: Doctor's patient list

Features:
- Current OPD patients
- IPD patients under care
- Search by name/MRN
- Quick view

10.2.3 Patient Search (`/doctor/patient-search`)
Purpose: Global patient search

Features:
- Search all patients
- View medical history
- Access records

10.2.4 Prescription (`/doctor/prescription`)
Purpose: Write prescriptions

Features:
- Patient Selection:
  - From today's tokens
  - Search by MRN
  - New patient

- Prescription Form:
  - Complaints
  - History
  - Examination findings
  - Diagnosis
  - Medicines
  - Dosage and duration
  - Instructions
  - Tests advised
  - Follow-up date

- Medicine Search:
  - By brand name
  - By generic name
  - Common prescriptions
  - Favorites

- Print: Print prescription

Workflow:
1. Select patient
2. Enter clinical details
3. Search and add medicines
4. Enter dosage instructions
5. Add tests if needed
6. Set follow-up date
7. Print/Save prescription

10.2.5 Prescription History (`/doctor/prescriptions`, `/doctor/prescription-history`)
Purpose: View past prescriptions

Features:
- Prescription list
- Date filter
- Patient filter
- Re-print prescriptions
- Copy as template

10.2.6 Reports (`/doctor/reports`)
Purpose: Doctor's activity reports

Reports:
- Daily patient count
- Prescription statistics
- Revenue generated
- Department-wise stats

10.2.7 Notifications (`/doctor/notifications`)
Purpose: Doctor alerts

Notifications:
- New patient in queue
- Lab results ready
- Emergency alerts
- System notifications

10.2.8 Settings (`/doctor/settings`)
Purpose: Doctor preferences

Settings:
- Profile details
- Signature setup
- Prescription template
- Notification preferences

---

11. Common Features

11.1 Search Functionality
Available Across All Modules:
- Global patient search (MRN, Name, CNIC, Phone)
- Product/medicine search
- Doctor search
- Invoice/Receipt search

Search Operators:
- Partial matching
- Exact match (with quotes)
- Date range
- Wildcard support

11.2 Date Pickers
Standard Date Controls:
- Calendar popup
- Date range selection
- Quick selects (Today, Yesterday, This Week, This Month)
- Custom date entry

11.3 Filters
Common Filter Options:
- Date range
- Status
- Department
- User/Staff
- Amount range
- Category

11.4 Export Options
Available Exports:
- Excel (.xlsx)
- PDF
- CSV
- Print

11.5 Notifications
Notification Types:
- In-app notifications
- Low stock alerts
- Expiry alerts
- Payment reminders
- Task assignments
- System alerts

11.6 Printing
Print Options:
- Receipts (thermal/standard)
- Reports (A4)
- Labels (barcode)
- Prescriptions
- Certificates

11.7 Help & Support
Available Resources:
- Contextual help
- Keyboard shortcuts
- Video tutorials (if configured)
- Contact support

---

12. Security & Audit

12.1 User Authentication
- Username/password login
- Session timeout (configurable)
- Password complexity requirements
- Account lockout after failed attempts

12.2 Role-Based Access Control (RBAC)
Available Roles:
- Super Admin: Full access
- Admin: Module administration
- Doctor: Clinical functions
- Receptionist: Front desk
- Nurse: Patient care
- Cashier: Billing only
- Lab Technician: Lab operations
- Pharmacist: Pharmacy operations
- Finance: Accounting only
- Viewer: Read-only access

12.3 Sidebar Permissions
Permission Levels:
- View: Can see the menu
- Create: Can add new records
- Edit: Can modify records
- Delete: Can remove records
- Export: Can export data
- Print: Can print documents

12.4 Audit Logging
Logged Activities:
- Login/logout
- Record creation
- Record modification
- Record deletion
- Print actions
- Export actions
- Permission changes

Audit Trail Includes:
- Timestamp
- User ID
- Action type
- Module
- Record ID
- Old value
- New value
- IP address

12.5 Data Backup
Backup Options:
- Manual backup
- Scheduled backup (daily/weekly)
- Automatic backup to cloud (if configured)
- Local backup storage
- Restore from backup

12.6 Data Retention
- Configurable retention policies
- Archival of old records
- Automatic cleanup options

---

13. System Administration

13.1 User Management
Tasks:
- Create users
- Assign roles
- Reset passwords
- Enable/disable accounts
- Manage user profiles

13.2 Module Settings
Configurable Per Module:
- General settings
- Billing settings
- Notification settings
- Integration settings
- Print settings

13.3 Integration Management
Available Integrations:
- FBR POS Integration
- Biometric devices
- SMS gateway
- Email server
- Payment gateways

13.4 System Health
Monitoring:
- Database status
- Disk space
- Backup status
- Error logs
- Performance metrics

---

14. Step-by-Step Workflows

This section provides detailed, click-by-click instructions for common tasks across all modules.

---

14.1 Patient Management Workflows

14.1.1 How to Add a New Patient (OPD Registration)

Path: `/hospital/token-generator` or `/reception/token-generator`

Prerequisites:
- Must have Receptionist or Admin role
- Logged into Hospital or Reception module

Step-by-Step Procedure:

1. Navigate to Token Generator   - Login to Hospital module (`/hospital/login`)
   - Click "Token Generator" from sidebar menu
   - OR navigate directly to `/hospital/token-generator`

2. Start New Patient Registration   - Click the "New Patient" button (usually green button on top right)
   - Patient registration form opens in modal/sidebar

3. Enter Personal Information   
   | Field | Required | Description | Example |
   |-------|----------|-------------|---------|
   | Full Name | Yes | Patient's complete name | Muhammad Ahmed |
   | Father/Husband Name | Yes | For identification | Muhammad Ali |
   | Gender | Yes | Male/Female/Other | Male |
   | Date of Birth | Yes | Age calculation | 15-03-1990 |
   | Age | Auto | Auto-calculated from DOB | 34 years |
   | CNIC Number | Conditional | For adults (18+) | 35201-1234567-8 |
   | Contact Number | Yes | Primary phone | 0300-1234567 |
   | Alternate Phone | No | Secondary contact | 042-12345678 |
   | Email | No | For notifications | patient@email.com |
   | Address | Yes | Residential address | House 123, Street 4, Sialkot |
   | City | Yes | City name | Sialkot |

4. Enter Emergency Contact Information   - Emergency Contact Name
   - Relationship (Father, Mother, Spouse, etc.)
   - Emergency Phone Number

5. Select Doctor   - Click "Select Doctor" dropdown
   - Browse by:
     - Doctor Name
     - Specialization (Cardiology, General Medicine, etc.)
     - Department
   - System displays:
     - Doctor's available slots
     - Current token queue length
     - Consultation fee

6. Verify Fee Information   - Check displayed consultation fee
   - Confirm if any discount applies (corporate patients)

7. Generate Token   - Click "Generate Token" button
   - System performs validation:
     - Checks required fields
     - Validates CNIC format
     - Verifies phone number
   - If errors: Error message appears, correct and retry
   - If successful:
     - Token number generated (format: T-YYYYMMDD-XXX)
     - MRN auto-generated (format: MRN-YYYYMMDD-XXXX)
     - Receipt ready for printing

8. Collect Payment & Print Receipt   - Enter amount received
   - Select payment method (Cash/Card)
   - Click "Print Receipt"   - Thermal printer prints token receipt

9. Direct Patient   - Inform patient of token number
   - Direct to waiting area
   - Token displays on TV/monitor in queue

Alternative: Quick Registration (Minimal Fields)- For emergency cases, use "Quick Registration"- Minimum required: Name, Gender, Phone, Doctor
- Complete profile later via Patient Profile

---

14.1.2 How to Search for an Existing Patient

Path: `/hospital/search-patients` or `/hospital/patient-list`

Step-by-Step:

1. Navigate to Search   - Click "Search Patients" in sidebar
   - OR "Patient List" from menu

2. Enter Search Criteria   - By MRN: Enter full or partial MRN (e.g., "MRN-2024")
   - By Name: Enter patient name (partial match works)
   - By CNIC: Enter CNIC number without dashes
   - By Phone: Enter mobile or landline number

3. Apply Filters (Optional)   - Status: Active/Discharged/All
   - Date Range: Admission date range
   - Doctor: Specific admitting doctor
   - Department: Filter by department

4. View Results   - Results display in table format
   - Columns: MRN, Name, CNIC, Phone, Status, Actions

5. Access Patient Profile   - Click "View" button on patient row
   - OR click patient name hyperlink
   - Redirects to `/hospital/patient/:id`

---

14.1.3 How to Admit a Patient (IPD Admission)

Path: `/hospital/ipd` → Admit New Patient

Prerequisites:
- Patient must be registered in system (have MRN)
- Bed must be available
- Doctor approval for admission

Step-by-Step:

1. Go to IPD Dashboard   - Navigate to `/hospital/ipd`
   - Click "Admit Patient" button

2. Search Patient   - Enter MRN or name in search box
   - Select patient from dropdown results
   - System loads patient details

3. Select Admitting Doctor   - Choose doctor from dropdown
   - For emergency: Select "Emergency Physician"

4. Enter Admission Details   | Field | Required | Description |
   |-------|----------|-------------|
   | Admission Type | Yes | Emergency/Planned/Day Care |
   | Admission Date/Time | Yes | Defaults to current |
   | Referring Doctor | No | If referred from OPD |
   | Provisional Diagnosis | Yes | Initial diagnosis |
   | Presenting Complaints | Yes | Symptoms description |
   | Past Medical History | No | Previous illnesses |
   | Current Medications | No | Ongoing medicines |
   | Allergies | No | Drug/food allergies |

5. Select Bed/Ward   - Click "Select Bed" button
   - Bed management popup opens
   - Filter by:
     - Ward/Department
     - Bed Type (General/Semi-Private/Private/ICU)
     - Availability
   - Click on available bed (green color)
   - Confirm selection

6. Set Billing Category   - General/Corporate/Insurance/Panel
   - If Corporate: Select company from list
   - If Insurance: Enter insurance details
     - Insurance company
     - Policy number
     - TPA details

7. Upload Documents (Optional)   - CNIC copy (front and back)
   - Referral letter
   - Previous medical records
   - Insurance card copy

8. Enter Advance Payment (If any)   - Advance amount received
   - Payment method
   - Receipt number auto-generated

9. Generate Admission Form   - Click "Admit Patient"   - System:
     - Generates admission number
     - Allocates bed
     - Creates billing account
     - Prints admission slip

10. Complete Admission    - Hand admission slip to patient/attendant
    - Direct to allocated ward/bed
    - Inform ward nurse of admission

---

14.1.4 How to Update Patient Profile

Path: `/hospital/patient/:id` → Edit Profile

Step-by-Step:

1. Search and Open Patient   - Find patient using search (Section 14.1.2)
   - Click to open profile

2. Enter Edit Mode   - Click "Edit Profile" button (top right)
   - Form becomes editable

3. Update Information   
   Personal Information Tab:
   - Update contact details
   - Change address
   - Update marital status
   - Modify occupation
   
   Medical Information Tab:
   - Update blood group
   - Add/modify allergies
   - Update chronic conditions
   - Add family history
   
   Emergency Contacts Tab:
   - Add new emergency contacts
   - Update existing contacts
   - Set primary contact
   
   Insurance/Corporate Tab:
   - Update insurance details
   - Change corporate affiliation
   - Update policy information

4. Save Changes   - Click "Save Changes"   - System validates inputs
   - Success message confirms update
   - Audit log records change

---

14.1.5 How to Discharge a Patient

Path: `/hospital/discharge/:id` or IPD Dashboard → Discharge

Step-by-Step:

1. Initiate Discharge   - From IPD Dashboard, click "Discharge" on patient row
   - OR open patient profile, click "Initiate Discharge"
2. Medical Clearance   - Doctor enters:
     - Final diagnosis
     - Discharge condition (Cured/Improved/Against Advice)
     - Discharge instructions
     - Follow-up date
     - Medications to continue
   - Upload discharge summary document
   - Doctor digital signature

3. Nursing Clearance   - Ward nurse verifies:
     - All equipment returned
     - No pending medicines
     - Room condition checked
   - Nursing notes added

4. Billing Clearance   - Finance reviews final bill
   - Verify all charges:
     - Room charges (auto-calculated)
     - Doctor visits
     - Procedures
     - Medicines
     - Lab tests
   - Apply any discounts
   - Calculate final amount

5. Collect Payment/Settlement   - If balance due: Collect payment
   - If refund due: Process refund
   - Generate final invoice
   - Print discharge slip

6. Release Bed   - Click "Release Bed"   - Bed status changes to "Cleaning"
   - After cleaning, available for next patient

7. Complete Discharge   - Hand discharge documents to patient:
     - Discharge summary
     - Final invoice
     - Medication prescriptions
     - Follow-up appointment card
   - Patient status changes to "Discharged"

---

14.2 Doctor Management Workflows

14.2.1 How to Add a New Doctor

Path: `/hospital/doctors` → Add Doctor

Prerequisites:
- Admin or HR Manager role required

Step-by-Step:

1. Navigate to Doctors List   - Login to Hospital module
   - Click "Doctors" in sidebar
   - Page shows all existing doctors

2. Start New Doctor Registration   - Click "Add New Doctor" button (top right)
   - Doctor registration form opens

3. Enter Personal Information   
   | Field | Required | Description |
   |-------|----------|-------------|
   | Full Name | Yes | Doctor's complete name |
   | Father Name | Yes | For records |
   | Gender | Yes | Male/Female |
   | Date of Birth | Yes | For age calculation |
   | CNIC | Yes | National ID |
   | Contact Number | Yes | Primary mobile |
   | Email | Yes | Official email |
   | Address | Yes | Residential address |
   | Emergency Contact | Yes | Family contact |

4. Enter Professional Information   
   | Field | Required | Description | Example |
   |-------|----------|-------------|---------|
   | PM&DC Number | Yes | Registration number | 12345-ABC |
   | Qualification | Yes | Degrees | MBBS, FCPS |
   | Specialization | Yes | Primary specialty | Cardiology |
   | Sub-specialization | No | Secondary specialty | Interventional Cardiology |
   | Experience (Years) | No | Years of practice | 10 |
   | Designation | Yes | Job title | Consultant Cardiologist |

5. Set Doctor Type   - Visiting Doctor: External consultant, visiting specific days
   - Resident Doctor: Full-time employed
   - Visiting Surgeon: For surgeries only
   - Honorary: Pro bono services

6. Configure Consultation Fees   
   | Fee Type | Field | Description |
   |----------|-------|-------------|
   | OPD Fee | Consultation Charges | Standard OPD fee |
   | Emergency Fee | Emergency Charges | After-hours fee |
   | Follow-up Fee | Follow-up Charges | Reduced follow-up rate |
   | IPD Visit Fee | IPD Visit Charges | Per visit in ward |

7. Set Revenue Sharing (if applicable)   - Hospital Share: % (e.g., 40%)
   - Doctor Share: % (e.g., 60%)
   - Applies to consultation fees

8. Assign Departments   - Select primary department
   - Add secondary departments (if any)
   - Set department head status (yes/no)

9. Upload Documents   - PM&DC Registration Certificate
   - Qualification Degrees
   - CNIC Copy
   - Recent Photograph
   - Experience Certificates

10. Create System User Account    - Auto-generate username (e.g., dr.ahmed)
    - Set temporary password
    - Assign role: "Doctor"
    - Doctor receives login credentials via email

11. Save Doctor Profile    - Click "Save Doctor"    - System validates PM&DC number (unique check)
    - Profile created
    - Doctor added to active list

---

14.2.2 How to Set Doctor Schedule

Path: `/hospital/doctor-schedules`

Step-by-Step:

1. Navigate to Schedules   - Click "Doctor Schedules" in sidebar

2. Select Doctor   - Choose doctor from dropdown
   - Current schedule displays (if any)

3. Set Weekly Schedule   
   For each day (Monday-Sunday):
   
   | Setting | Description |
   |---------|-------------|
   | Day Status | Working / Off / On-Call |
   | Start Time | OPD start time |
   | End Time | OPD end time |
   | Break Start | Lunch break start |
   | Break End | Lunch break end |
   | Max Tokens | Maximum patients per day |
   | Average Time | Minutes per patient |

4. Add Exception/Leave   - Click "Add Exception"   - Select date range
   - Type: Leave / Conference / Training
   - Reason description
   - Alternate covering doctor (if any)

5. Block Specific Time Slots   - For surgery days or meetings
   - Select date
   - Block specific hours
   - Add reason for blocking

6. Save Schedule   - Click "Save Schedule"   - System validates (no overlapping times)
   - Schedule active immediately
   - Patients see updated availability

---

14.2.3 How to Update Doctor Profile

Path: `/hospital/doctors` → Edit

Step-by-Step:

1. Find Doctor   - In Doctors list, search by name or PM&DC number
   - Click "Edit" button on doctor row

2. Update Information   
   Personal Tab:
   - Update contact details
   - Change address
   - Update photograph
   
   Professional Tab:
   - Add new qualifications
   - Update specializations
   - Modify designation
   - Update PM&DC number (rare)
   
   Fees Tab:
   - Update consultation charges
   - Modify revenue sharing %
   - Add new fee types
   
   Schedule Tab:
   - Quick link to schedule page
   
   Documents Tab:
   - Upload new certificates
   - Renew expired documents

3. Status Management   - Active: Doctor can see patients
   - Inactive: Temporarily suspended
   - Terminated: Permanent removal

4. Save Changes   - All changes logged in audit trail
   - Email notification to doctor (if configured)

---

14.3 Nurse/Staff Management Workflows

14.3.1 How to Add a New Nurse

Path: `/hospital/staff-management` → Add Staff

Step-by-Step:

1. Navigate to Staff Management   - Click "Staff Management" in sidebar
   - Page displays all staff members

2. Add New Staff   - Click "Add Staff" button
   - Staff registration form opens

3. Select Staff Type   - Choose "Nurse" from staff type dropdown

4. Enter Personal Information   
   | Field | Required | Description |
   |-------|----------|-------------|
   | Full Name | Yes | Complete name |
   | Father/Spouse Name | Yes | Guardian/spouse |
   | Gender | Yes | Male/Female |
   | Date of Birth | Yes | For age/retirement calc |
   | CNIC | Yes | National ID |
   | Contact Number | Yes | Primary phone |
   | Email | Yes | Official email |
   | Address | Yes | Residential address |
   | City | Yes | City name |

5. Enter Professional Details   
   | Field | Required | Description | Example |
   |-------|----------|-------------|---------|
   | PINC Number | Yes | Nursing council registration | PN-12345 |
   | Qualification | Yes | Nursing degree | BSc Nursing |
   | Specialization | No | Area of expertise | ICU, OT, Midwifery |
   | Experience | No | Years of experience | 5 years |
   | Grade | Yes | Pay grade/level | Staff Nurse Grade II |

6. Employment Information   
   | Field | Required | Description |
   |-------|----------|-------------|
   | Employee ID | Auto | System generated |
   | Department | Yes | Assigned department |
   | Ward/Unit | Yes | Specific ward/unit |
   | Joining Date | Yes | Date of joining |
   | Employment Type | Yes | Permanent/Contract/Part-time |
   | Shift Preference | No | Morning/Evening/Night |
   
7. Salary Information   
   | Field | Description |
   |-------|-------------|
   | Basic Salary | Monthly basic pay |
   | Allowances | Medical, transport, etc. |
   | Bank Account | For salary deposit |
   | Bank Name | Employee's bank |

8. Upload Documents   - PNC Registration Certificate
   - Educational Certificates
   - Experience Certificates
   - CNIC Copy
   - Passport-size Photograph
   - Police Verification (if required)
   - Medical Fitness Certificate

9. Create System Access   - Auto-generate username
   - Assign role: "Nurse"
   - Set permissions:
     - View assigned patients
     - Add nursing notes
     - Update vitals
     - View medication chart

10. Complete Registration    - Click "Save Staff"    - Employee ID generated
    - Login credentials sent to email
    - Nurse added to duty roster

---

14.3.2 How to Add Other Staff Types

Path: `/hospital/staff-management` → Add Staff

Staff Types Available:
- Technicians: Lab, Radiology, OT
- Administrative: Reception, Billing, HR
- Support: Security, Housekeeping, Transport
- Pharmacists: Pharmacy staff
- Managerial: Department heads, supervisors

Common Workflow for All Staff:

1. Navigate to Staff Management
2. Click "Add Staff"
3. Select staff type
4. Fill personal information (common fields)
5. Fill type-specific information:
   
   Technicians:
   - Technical certifications
   - Equipment expertise
   - License numbers
   
   Administrative:
   - Computer skills
   - Language proficiency
   - Previous experience
   
   Pharmacists:
   - Pharmacy council number
   - Drug dispensing license
   - Specialization area

6. Set department and reporting manager
7. Configure salary details
8. Upload relevant documents
9. Create system access with appropriate role
10. Save and activate

---

14.3.3 How to Mark Staff Attendance

Path: `/hospital/staff-attendance`

Step-by-Step:

1. Navigate to Attendance Page   - Click "Staff Attendance" in sidebar
   - Current date displayed by default

2. Select Date   - Use date picker to change date (if marking previous day)
   - Default is today's date

3. Mark Individual Attendance   
   For each staff member:
   
   | Status | When to Use |
   |--------|-------------|
   | Present | Staff is present and working |
   | Absent | Staff did not come |
   | Late | Staff came after shift start |
   | Half Day | Staff worked partial day |
   | On Leave | Approved leave |
   | Off | Weekly off/holiday |

4. Enter Time Details (if applicable)   - Check-in time (for late arrivals)
   - Check-out time (for early departures)
   - Biometric verification status

5. Bulk Mark Attendance   - Click "Mark All Present" (for quick marking)
   - Select multiple staff
   - Apply same status to all

6. Add Notes   - Reason for late arrival
   - Leave type detail
   - Special circumstances

7. Save Attendance   - Click "Save Attendance"   - System validates entries
   - Attendance recorded
   - Affects salary calculation

Biometric Integration:
- If biometric device connected:
  - Click "Sync Biometric"  - System pulls attendance from device
  - Verify and approve synced data

---

14.3.4 How to Manage Staff Schedule/Roster

Path: `/hospital/staff-settings` → Shift Management

Step-by-Step:

1. Define Shifts   - Click "Manage Shifts"   - Add shift definitions:
     - Shift Name (Morning, Evening, Night)
     - Start Time (e.g., 08:00)
     - End Time (e.g., 16:00)
     - Break Duration

2. Create Duty Roster   - Select week/date range
   - Department/ward selection
   - For each staff:
     - Assign shift
     - Mark weekly off
     - Add leave days

3. Roster Templates   - Save common roster patterns
   - Apply template to new week
   - Modify as needed

4. Staff Self-Service   - Staff can view their roster
   - Request shift swaps
   - Apply for leave
   - Manager approval required

---

14.4 User Account Management Workflows

14.4.1 How to Create User Account

Path: `/hospital/user-management` → Add User

Step-by-Step:

1. Navigate to User Management   - Click "User Management" in sidebar
   - List of all system users displayed

2. Add New User   - Click "Add User" button
   - User creation form opens

3. Enter User Details   
   | Field | Required | Description |
   |-------|----------|-------------|
   | Username | Yes | Unique login name |
   | Full Name | Yes | Display name |
   | Email | Yes | For notifications |
   | Phone | No | Contact number |
   | Role | Yes | System role |

4. Assign Role   
   | Role | Access Level |
   |------|--------------|
   | Super Admin | Full system access |
   | Admin | Module administration |
   | Doctor | Clinical functions |
   | Nurse | Patient care functions |
   | Receptionist | Front desk |
   | Cashier | Billing only |
   | Lab Technician | Lab operations |
   | Pharmacist | Pharmacy |
   | Finance | Accounting |
   | Viewer | Read-only |

5. Department Assignment   - Select primary department
   - Grant access to specific modules

6. Set Password   - Auto-generate: System creates password
   - Manual: Enter custom password
   - User must change on first login (recommended)

7. Configure Permissions   - Sidebar Access: Which menus visible
   - Action Permissions:
     - View records
     - Create records
     - Edit records
     - Delete records
     - Export data
     - Print documents

8. Additional Settings   - Status: Active/Inactive
   - Password Expiry: Days until password change required
   - Session Timeout: Auto-logout after inactivity
   - Two-Factor Authentication: Enable/disable

9. Save User   - Click "Create User"   - System validates username (unique check)
   - User account created
   - Welcome email sent with credentials

---

14.4.2 How to Reset User Password

Path: `/hospital/user-management` → Reset Password

Step-by-Step:

1. Find User   - In User Management, search by username or name
   - Click on user row

2. Reset Password   - Click "Reset Password" button
   - Choose method:
     - Auto-generate: System creates random password
     - Custom: Admin enters new password

3. Notify User   - Check "Send email notification"   - User receives new password via email
   - User must change on next login

4. Force Logout (if needed)   - If user is currently logged in:
   - Click "Force Logout"   - User session terminated immediately

---

14.4.3 How to Configure Sidebar Permissions

Path: `/hospital/sidebar-permissions`

Step-by-Step:

1. Navigate to Permissions   - Click "Sidebar Permissions" in sidebar

2. Select Role   - Choose role from dropdown (e.g., "Nurse")
   - Current permissions display

3. Configure Menu Access   
   For each menu item:
   
   | Setting | Description |
   |---------|-------------|
   | Visible | Menu item shown/hidden |
   | View | Can view records |
   | Create | Can add new records |
   | Edit | Can modify records |
   | Delete | Can delete records |
   | Print | Can print documents |
   | Export | Can export data |

4. Example: Nurse Role Configuration   
   | Menu Item | Visible | View | Create | Edit | Delete |
   |-----------|---------|------|--------|------|--------|
   | Dashboard | ✓ | ✓ | - | - | - |
   | Patient List | ✓ | ✓ | - | - | - |
   | IPD | ✓ | ✓ | - | ✓ | - |
   | Vitals Entry | ✓ | ✓ | ✓ | ✓ | - |
   | Nursing Notes | ✓ | ✓ | ✓ | - | - |
   | Token Generator | ✗ | - | - | - | - |
   | Billing | ✗ | - | - | - | - |
   | Admin | ✗ | - | - | - | - |

5. Apply to Users   - Click "Apply to All Users in Role"   - OR select specific users
   - Permissions applied immediately
   - Affected users see changes on next page load

6. Custom User Override   - For specific user exceptions:
   - Select user instead of role
   - Customize individual permissions
   - Overrides role-based permissions

---

14.5 Pharmacy Workflows

14.5.1 How to Add Medicine to Inventory

Path: `/pharmacy/inventory` → Add Product

Step-by-Step:

1. Navigate to Inventory   - Login to Pharmacy module
   - Click "Inventory" in sidebar

2. Add New Product   - Click "Add Product" button
   - Product entry form opens

3. Enter Medicine Details   
   | Field | Required | Description | Example |
   |-------|----------|-------------|---------|
   | Product Name | Yes | Brand name | Panadol |
   | Generic Name | Yes | Chemical name | Paracetamol |
   | Dosage Form | Yes | Type | Tablet, Syrup, Injection |
   | Strength | Yes | Potency | 500mg, 125mg/5ml |
   | Category | Yes | Classification | Analgesic, Antibiotic |
   | Manufacturer | Yes | Pharma company | GSK |
   | Supplier | Yes | Who supplies |

4. Add Batch Information   
   | Field | Required | Description |
   |-------|----------|-------------|
   | Batch Number | Yes | Manufacturer batch |
   | Expiry Date | Yes | MM/YYYY |
   | MRP | Yes | Maximum retail price |
   | Purchase Price | Yes | Cost price |
   | Selling Price | Yes | Selling price |
   | Quantity | Yes | Units received |
   | Free Units | No | Bonus quantity |

5. Inventory Settings   - Reorder Level: Minimum stock before reorder alert
   - Reorder Quantity: How much to reorder
   - Rack/Location: Storage location in pharmacy
   - GST/Tax: Tax percentage

6. Schedule Classification   - Schedule H: Prescription required
   - Schedule H1: Narcotics (special record)
   - OTC: Over-the-counter
   - General: Regular medicines

7. Save Product   - Click "Save Product"   - Stock updated
   - Barcode generated (if enabled)

---

14.5.2 How to Process a Sale (POS)

Path: `/pharmacy/pos`

Step-by-Step:

1. Navigate to POS   - Click "POS" in sidebar
   - POS interface opens

2. Search Medicine   - Use search bar to find medicine:
     - By brand name
     - By generic name
     - Scan barcode
   - Select medicine from results

3. Add to Cart   - Enter quantity
   - System checks stock availability
   - If available: Adds to cart
   - If low stock: Warning displayed
   - If out of stock: Alternative suggestions

4. Add More Items   - Repeat search and add
   - Cart shows all items with:
     - Product name
     - Quantity
     - Unit price
     - Total

5. Apply Discount (if applicable)   - Click "Apply Discount"   - Enter discount % or amount
   - Reason for discount
   - Manager approval (if required)

6. Select Customer Type   - Walk-in: Regular customer
   - Patient: Select by MRN (linked to hospital)
   - Corporate: Select company

7. Process Payment   
   | Payment Method | Steps |
   |----------------|-------|
   | Cash | Enter amount received, system calculates change |
   | Card | Select card type, enter last 4 digits |
   | Credit | For approved corporate/insurance patients |
   | Multiple | Split between cash and card |

8. Complete Sale   - Click "Complete Sale"   - Invoice generated
   - Receipt prints automatically
   - Stock deducted from inventory

---

14.6 Lab Workflows

14.6.1 How to Add a New Test

Path: `/lab/tests` → Add Test

Step-by-Step:

1. Navigate to Tests   - Login to Lab module
   - Click "Tests" in sidebar

2. Add New Test   - Click "Add Test" button

3. Enter Test Information   
   | Field | Required | Description | Example |
   |-------|----------|-------------|---------|
   | Test Name | Yes | Full test name | Complete Blood Count |
   | Test Code | Yes | Short code | CBC |
   | Department | Yes | Lab section | Hematology |
   | Price | Yes | Test fee | 500 |
   | TAT | Yes | Turnaround time | 2 hours |

4. Define Test Parameters   
   For each parameter in the test:
   
   | Setting | Description | Example |
   |---------|-------------|---------|
   | Parameter Name | What is measured | Hemoglobin |
   | Unit | Measurement unit | g/dL |
   | Normal Range (Male) | Reference range | 13.5-17.5 |
   | Normal Range (Female) | Reference range | 12.0-15.5 |
   | Critical Low | Alert threshold | < 7.0 |
   | Critical High | Alert threshold | > 20.0 |
   | Decimal Places | Result precision | 1 |

5. Set Sample Requirements   - Sample type: Blood/Urine/Stool/etc.
   - Sample volume required
   - Container type
   - Special instructions (fasting, etc.)

6. Save Test   - Click "Save Test"   - Test available for ordering

---

14.6.2 How to Process Lab Order

Path: `/lab/orders` → Sample Intake

Step-by-Step:

1. Receive Sample   - Sample arrives at lab reception
   - Enter order ID or scan barcode

2. Verify Information   - Patient name verification
   - Test ordered verification
   - Sample quality check

3. Accept/Reject Sample   
   Accept if:   - Correct sample type
   - Adequate volume
   - Proper labeling
   - No clotting/hemolysis (for blood)
   
   Reject if:   - Wrong sample type
   - Insufficient quantity
   - Improper labeling
   - - Note reason for rejection
   - Notify referring department

4. Register Sample   - System generates sample ID
   - Print barcode label
   - Apply label to sample tube
   - Record collection time

5. Assign to Technician   - Select processing technician
   - Assign priority (Routine/STAT)
   - Send to appropriate lab section

6. Status Update   - Sample status: "Processing"
   - Visible to referring doctor

---

14.7 Corporate Client Workflows

14.7.1 How to Add Corporate Client

Path: `/hospital/corporate/companies` → Add Company

Step-by-Step:

1. Navigate to Companies   - Login to Hospital module
   - Go to Corporate → Companies

2. Add New Company   - Click "Add Company"
3. Enter Company Details   
   | Field | Required | Description |
   |-------|----------|-------------|
   | Company Name | Yes | Full legal name |
   | Trade Name | No | Short/display name |
   | Registration Number | Yes | NTN/SECP number |
   | Industry Type | No | Type of business |
   
4. Contact Information   - Primary contact person name
   - Designation
   - Phone number
   - Email address
   - Billing address
   - Office address

5. Contract Details   - Contract start date
   - Contract end date
   - Credit limit
   - Payment terms (30/60/90 days)
   - Billing cycle (monthly/quarterly)

6. Rate Rules   - Select applicable rate rule
   - Or create custom rates
   - Discount percentage
   - Excluded services

7. Employee Enrollment   - Upload employee list (Excel)
   - Or add individually:
     - Employee ID
     - Name
     - CNIC
     - Dependents

8. Save Company   - Company activated
   - Employees can avail corporate billing

---

14.8 Common Task Workflows

14.8.1 How to Generate Reports

Standard Report Generation Steps:

1. Navigate to Reports Section   - Each module has Reports menu item

2. Select Report Type   - Daily summary
   - Monthly statement
   - Custom range
   - Department-wise
   - Doctor-wise

3. Set Parameters   - Date range (From - To)
   - Department filter (if applicable)
   - Doctor filter (if applicable)
   - Other filters specific to report

4. Preview Report   - Click "Generate Preview"   - Report displays on screen
   - Verify data accuracy

5. Export/Print   - Export to Excel: Download .xlsx file
   - Export to PDF: Download .pdf file
   - Print: Send to printer
   - Email: Send to specified email

---

14.8.2 How to Backup Data

Path: `/hospital/backup`

Step-by-Step:

1. Navigate to Backup   - Click "Backup" in sidebar

2. Manual Backup   - Click "Create Backup Now"   - System creates backup file
   - Progress indicator shows status
   - Backup complete notification

3. Download Backup   - Click "Download" on backup entry
   - Save to secure location

4. Scheduled Backup Settings   - Enable auto-backup
   - Set frequency (Daily/Weekly)
   - Set time (off-peak hours)
   - Set retention (keep last X backups)

5. Restore (if needed)   - Click "Restore"   - Select backup file
   - Confirm restore
   - Warning: Current data will be replaced

---

14.8.3 How to Handle User Complaints/Issues

Issue Reporting Workflow:

1. Document the Issue   - Note exact error message
   - Screenshot the error
   - Note steps to reproduce
   - Record time of occurrence

2. Check Audit Logs   - Go to Audit Logs
   - Filter by time of issue
   - Check for failed operations

3. Contact Support   - Email: support@hospital.com
   - Include:
     - Username
     - Module being used
     - Detailed description
     - Screenshots
     - Patient/Record ID (if applicable)

4. Temporary Workaround   - Use alternative method if available
   - Document manual workaround
   - Notify affected users

---

Appendix A: Keyboard Shortcuts

Global Shortcuts
| Shortcut | Action |
|----------|--------|
| Ctrl + / | Open help |
| Ctrl + S | Save |
| Ctrl + P | Print |
| Ctrl + E | Export |
| Ctrl + F | Find/Search |
| Ctrl + N | New record |
| Escape | Close modal/Go back |

Module-Specific Shortcuts
| Module | Shortcut | Action |
|--------|----------|--------|
| Pharmacy | F2 | Quick product search |
| Pharmacy | F4 | Open POS |
| Lab | F3 | Sample search |
| Hospital | F5 | Refresh dashboard |
| All | F9 | Save & New |
| All | F10 | Save & Close |

---

Appendix B: Error Messages & Troubleshooting

Common Errors

"Session Expired"
Cause: Inactivity timeout
Solution: Re-login with credentials

"Permission Denied"
Cause: Insufficient privileges
Solution: Contact administrator for access

"Record Not Found"
Cause: Deleted or invalid ID
Solution: Verify record ID or search again

"Printer Not Connected"
Cause: Printer offline
Solution: Check printer connection and try again

"Database Connection Failed"
Cause: Server issue
Solution: Contact IT support

---

Appendix C: Glossary

Global Shortcuts
| Shortcut | Action |
|----------|--------|
| Ctrl + / | Open help |
| Ctrl + S | Save |
| Ctrl + P | Print |
| Ctrl + E | Export |
| Ctrl + F | Find/Search |
| Ctrl + N | New record |
| Escape | Close modal/Go back |

Module-Specific Shortcuts
| Module | Shortcut | Action |
|--------|----------|--------|
| Pharmacy | F2 | Quick product search |
| Pharmacy | F4 | Open POS |
| Lab | F3 | Sample search |
| Hospital | F5 | Refresh dashboard |
| All | F9 | Save & New |
| All | F10 | Save & Close |

---

Appendix B: Error Messages & Troubleshooting

Common Errors

"Session Expired"
Cause: Inactivity timeout
Solution: Re-login with credentials

"Permission Denied"
Cause: Insufficient privileges
Solution: Contact administrator for access

"Record Not Found"
Cause: Deleted or invalid ID
Solution: Verify record ID or search again

"Printer Not Connected"
Cause: Printer offline
Solution: Check printer connection and try again

"Database Connection Failed"
Cause: Server issue
Solution: Contact IT support

---

Appendix C: Glossary

| Term | Definition |
|------|------------|
| MRN | Medical Record Number - Unique patient identifier |
| IPD | In-Patient Department - Hospital admissions |
| OPD | Out-Patient Department - External consultations |
| Token | Queue number for patient consultation |
| TAT | Turnaround Time - Time to complete a task |
| FBR | Federal Board of Revenue - Tax authority |
| GRN | Goods Receipt Note - Receipt of purchased items |
| CNIC | Computerized National Identity Card |
| RBAC | Role-Based Access Control |
| EMR | Electronic Medical Record |
| POS | Point of Sale |
| QC | Quality Control |
| KPI | Key Performance Indicator |

---

Document Version: 1.0  
Last Updated: February 2026  
System Version: Hospital Suite v0.0.0  
Support: IT Department / System Administrator

---

*End of User Manual*
