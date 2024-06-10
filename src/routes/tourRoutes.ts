import { Router } from 'express'
import { createTour } from '../controllers/tourController'

const router = Router()

router.post('/agendamentos', createTour)

export default router