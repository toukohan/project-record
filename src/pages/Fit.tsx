import { Navigate } from 'react-router-dom'

export default function Fit() {
  // Redirect to the actual fit evaluation tool
  return <Navigate to="/fit-evaluation" replace />
}
