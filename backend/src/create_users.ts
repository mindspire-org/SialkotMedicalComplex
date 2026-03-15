#!/usr/bin/env node
/**
 * Create users for all modules
 * Usage: npx ts-node create_users.ts
 * Or: npx ts-node backend/src/create_users.ts (from project root)
 */

import bcrypt from 'bcryptjs'
import { connectDB } from './config/db'
import { AestheticUser } from './modules/aesthetic/models/User'
import { DiagnosticUser } from './modules/diagnostic/models/User'
import { DialysisUser } from './modules/dialysis/models/User'
import { HospitalUser } from './modules/hospital/models/User'
import { FinanceUser } from './modules/hospital/models/finance_User'
import { LabUser } from './modules/lab/models/User'
import { PharmacyUser } from './modules/pharmacy/models/User'
import { ReceptionUser } from './modules/reception/models/User'

interface UserDefinition {
  username: string
  password: string
  role: string
  fullName?: string
  phone?: string
  email?: string
  permissions?: string[]
  active?: boolean
  shiftId?: string
  shiftRestricted?: boolean
}

interface ModuleUsers {
  model: any
  name: string
  users: UserDefinition[]
}

const DEFAULT_PASSWORD = '123'

// Define users for each module
const moduleUsers: ModuleUsers[] = [
  {
    model: HospitalUser,
    name: 'Hospital',
    users: [
      { username: 'hospital_admin', password: DEFAULT_PASSWORD, role: 'admin', fullName: 'Hospital Admin', active: true },
      { username: 'doctor', password: DEFAULT_PASSWORD, role: 'doctor', fullName: 'Doctor User', active: true },
      { username: 'nurse', password: DEFAULT_PASSWORD, role: 'nurse', fullName: 'Nurse User', active: true },
      { username: 'staff', password: DEFAULT_PASSWORD, role: 'staff', fullName: 'Staff User', active: true },
      { username: 'surgeon', password: DEFAULT_PASSWORD, role: 'surgeon', fullName: 'Surgeon User', active: true },
      { username: 'anesthetist', password: DEFAULT_PASSWORD, role: 'anesthetist', fullName: 'Anesthetist User', active: true },
      { username: 'manager', password: DEFAULT_PASSWORD, role: 'manager', fullName: 'Hospital Manager', active: true },
      { username: 'supervisor', password: DEFAULT_PASSWORD, role: 'supervisor', fullName: 'Department Supervisor', active: true },
      { username: 'physiotherapist', password: DEFAULT_PASSWORD, role: 'physiotherapist', fullName: 'Physiotherapist', active: true },
      { username: 'dietician', password: DEFAULT_PASSWORD, role: 'dietician', fullName: 'Dietician', active: true },
      { username: 'coordinator', password: DEFAULT_PASSWORD, role: 'coordinator', fullName: 'Patient Coordinator', active: true },
      { username: 'ward_incharge', password: DEFAULT_PASSWORD, role: 'ward_incharge', fullName: 'Ward Incharge', active: true },
    ]
  },
  {
    model: PharmacyUser,
    name: 'Pharmacy',
    users: [
      { username: 'pharmacy_admin', password: DEFAULT_PASSWORD, role: 'admin' },
      { username: 'salesman', password: DEFAULT_PASSWORD, role: 'salesman' },
      { username: 'pharmacist', password: DEFAULT_PASSWORD, role: 'pharmacist' },
      { username: 'inventory', password: DEFAULT_PASSWORD, role: 'inventory_manager' },
      { username: 'purchase', password: DEFAULT_PASSWORD, role: 'purchase_officer' },
      { username: 'store', password: DEFAULT_PASSWORD, role: 'store_keeper' },
      { username: 'dispenser', password: DEFAULT_PASSWORD, role: 'dispenser' },
      { username: 'returns_clerk', password: DEFAULT_PASSWORD, role: 'returns_clerk' },
      { username: 'quality_check', password: DEFAULT_PASSWORD, role: 'quality_controller' },
    ]
  },
  {
    model: LabUser,
    name: 'Lab',
    users: [
      { username: 'lab_admin', password: DEFAULT_PASSWORD, role: 'admin' },
      { username: 'technician', password: DEFAULT_PASSWORD, role: 'technician' },
      { username: 'pathologist', password: DEFAULT_PASSWORD, role: 'pathologist' },
      { username: 'microbiologist', password: DEFAULT_PASSWORD, role: 'microbiologist' },
      { username: 'lab_assistant', password: DEFAULT_PASSWORD, role: 'lab_assistant' },
      { username: 'sample_collector', password: DEFAULT_PASSWORD, role: 'sample_collector' },
      { username: 'biochemist', password: DEFAULT_PASSWORD, role: 'biochemist' },
      { username: 'hematologist', password: DEFAULT_PASSWORD, role: 'hematologist' },
      { username: 'histopathologist', password: DEFAULT_PASSWORD, role: 'histopathologist' },
    ]
  },
  {
    model: AestheticUser,
    name: 'Aesthetic',
    users: [
      { username: 'aesthetic_admin', password: DEFAULT_PASSWORD, role: 'admin', permissions: ['all'] },
      { username: 'doctor', password: DEFAULT_PASSWORD, role: 'doctor', permissions: ['view_patients', 'edit_patients', 'create_prescriptions'] },
      { username: 'receptionist', password: DEFAULT_PASSWORD, role: 'receptionist', permissions: ['view_patients', 'book_appointments'] },
      { username: 'aesthetician', password: DEFAULT_PASSWORD, role: 'aesthetician', permissions: ['view_patients', 'perform_treatments'] },
      { username: 'consultant', password: DEFAULT_PASSWORD, role: 'consultant', permissions: ['view_patients', 'create_consultations'] },
      { username: 'therapist', password: DEFAULT_PASSWORD, role: 'therapist', permissions: ['view_treatments', 'perform_therapies'] },
      { username: 'laser_tech', password: DEFAULT_PASSWORD, role: 'laser_technician', permissions: ['perform_laser_treatments'] },
      { username: 'skin_specialist', password: DEFAULT_PASSWORD, role: 'skin_specialist', permissions: ['skin_consultations', 'treatments'] },
    ]
  },
  {
    model: DiagnosticUser,
    name: 'Diagnostic',
    users: [
      { username: 'diagnostic_admin', password: DEFAULT_PASSWORD, role: 'admin' },
      { username: 'radiologist', password: DEFAULT_PASSWORD, role: 'radiologist' },
      { username: 'technician', password: DEFAULT_PASSWORD, role: 'technician' },
      { username: 'sonologist', password: DEFAULT_PASSWORD, role: 'sonologist' },
      { username: 'xray_tech', password: DEFAULT_PASSWORD, role: 'xray_technician' },
      { username: 'mri_tech', password: DEFAULT_PASSWORD, role: 'mri_technician' },
      { username: 'ct_tech', password: DEFAULT_PASSWORD, role: 'ct_technician' },
      { username: 'doppler_specialist', password: DEFAULT_PASSWORD, role: 'doppler_specialist' },
      { username: 'ecg_tech', password: DEFAULT_PASSWORD, role: 'ecg_technician' },
      { username: 'echo_tech', password: DEFAULT_PASSWORD, role: 'echo_technician' },
    ]
  },
  {
    model: DialysisUser,
    name: 'Dialysis',
    users: [
      { username: 'dialysis_admin', password: DEFAULT_PASSWORD, role: 'admin', fullName: 'Dialysis Admin', active: true },
      { username: 'dialysis_doctor', password: DEFAULT_PASSWORD, role: 'doctor', fullName: 'Dialysis Doctor', active: true },
      { username: 'dialysis_nurse', password: DEFAULT_PASSWORD, role: 'nurse', fullName: 'Dialysis Nurse', active: true },
      { username: 'dialysis_technician', password: DEFAULT_PASSWORD, role: 'technician', fullName: 'Dialysis Technician', active: true },
    ]
  },
  {
    model: ReceptionUser,
    name: 'Reception',
    users: [
      { username: 'reception_admin', password: DEFAULT_PASSWORD, role: 'admin' },
      { username: 'receptionist', password: DEFAULT_PASSWORD, role: 'receptionist' },
      { username: 'front_desk', password: DEFAULT_PASSWORD, role: 'receptionist' },
      { username: 'appointment_clerk', password: DEFAULT_PASSWORD, role: 'receptionist' },
      { username: 'billing_clerk', password: DEFAULT_PASSWORD, role: 'receptionist' },
      { username: 'inquiry_desk', password: DEFAULT_PASSWORD, role: 'receptionist' },
      { username: 'opd_coordinator', password: DEFAULT_PASSWORD, role: 'receptionist' },
    ]
  },
  {
    model: FinanceUser,
    name: 'Finance',
    users: [
      { username: 'finance_admin', password: DEFAULT_PASSWORD, role: 'admin' },
      { username: 'accountant', password: DEFAULT_PASSWORD, role: 'accountant' },
      { username: 'cashier', password: DEFAULT_PASSWORD, role: 'cashier' },
      { username: 'finance_manager', password: DEFAULT_PASSWORD, role: 'finance_manager' },
      { username: 'billing_manager', password: DEFAULT_PASSWORD, role: 'billing_manager' },
      { username: 'auditor', password: DEFAULT_PASSWORD, role: 'auditor' },
      { username: 'collection_agent', password: DEFAULT_PASSWORD, role: 'collection_agent' },
      { username: 'claims_processor', password: DEFAULT_PASSWORD, role: 'claims_processor' },
      { username: 'insurance_coordinator', password: DEFAULT_PASSWORD, role: 'insurance_coordinator' },
    ]
  },
]

async function ensureUser(model: any, userDef: UserDefinition): Promise<{ created: boolean; username: string; error?: string }> {
  try {
    // Check if user already exists
    const existing = await model.findOne({ username: userDef.username }).lean()
    if (existing) {
      return { created: false, username: userDef.username }
    }

    // Create password hash
    const passwordHash = await bcrypt.hash(userDef.password, 10)

    // Build user document based on model type
    const userDoc: any = {
      username: userDef.username,
      role: userDef.role,
      passwordHash,
    }

    // Add model-specific fields
    if (userDef.fullName !== undefined) userDoc.fullName = userDef.fullName
    if (userDef.phone !== undefined) userDoc.phone = userDef.phone
    if (userDef.email !== undefined) userDoc.email = userDef.email
    if (userDef.permissions !== undefined) userDoc.permissions = userDef.permissions
    if (userDef.active !== undefined) userDoc.active = userDef.active
    if (userDef.shiftId !== undefined) userDoc.shiftId = userDef.shiftId
    if (userDef.shiftRestricted !== undefined) userDoc.shiftRestricted = userDef.shiftRestricted

    await model.create(userDoc)
    return { created: true, username: userDef.username }
  } catch (error: any) {
    return { created: false, username: userDef.username, error: error.message }
  }
}

async function createUsers() {
  console.log('🔌 Connecting to database...')
  await connectDB()
  console.log('✅ Connected to database\n')

  const results: { module: string; username: string; status: string; error?: string }[] = []

  for (const module of moduleUsers) {
    console.log(`\n📦 Processing ${module.name} module...`)

    for (const user of module.users) {
      const result = await ensureUser(module.model, user)

      if (result.created) {
        console.log(`  ✅ Created user: ${result.username}`)
        results.push({ module: module.name, username: result.username, status: 'created' })
      } else if (result.error) {
        console.log(`  ❌ Error creating user ${result.username}: ${result.error}`)
        results.push({ module: module.name, username: result.username, status: 'error', error: result.error })
      } else {
        console.log(`  ⏭️  Skipped user: ${result.username} (already exists)`)
        results.push({ module: module.name, username: result.username, status: 'skipped' })
      }
    }
  }

  // Summary
  console.log('\n' + '='.repeat(50))
  console.log('📊 SUMMARY')
  console.log('='.repeat(50))

  const created = results.filter(r => r.status === 'created').length
  const skipped = results.filter(r => r.status === 'skipped').length
  const errors = results.filter(r => r.status === 'error').length

  console.log(`Total users processed: ${results.length}`)
  console.log(`  ✅ Created: ${created}`)
  console.log(`  ⏭️  Skipped (already exists): ${skipped}`)
  console.log(`  ❌ Errors: ${errors}`)

  if (errors > 0) {
    console.log('\n❌ Errors encountered:')
    results.filter(r => r.status === 'error').forEach(r => {
      console.log(`  - ${r.module}/${r.username}: ${r.error}`)
    })
  }

  console.log('\n✅ User creation process completed!')
  process.exit(0)
}

// Handle errors
process.on('unhandledRejection', (err: unknown) => {
  console.error('❌ Unhandled error:', err)
  process.exit(1)
})

// Run the script
createUsers().catch((err: unknown) => {
  console.error('❌ Fatal error:', err)
  process.exit(1)
})
