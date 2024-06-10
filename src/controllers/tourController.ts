import { Request, Response } from 'express'
import pool from '../config/db'
import Tour from '../models/Tour'

export const createTour = async (req: Request, res: Response): Promise<void> => {
    const { nome, email, local_origem, destino, data_ida, data_volta } = req.body as Tour

    try {
        const [rows] = await pool.query('INSERT INTO agendamentos (nome, email, local_origem, destino, data_ida, data_volta) VALUES (?, ?, ?, ?, ?, ?)', [nome, email, local_origem, destino, data_ida, data_volta])
        res.status(201).json({ message: 'Tour agendado com sucesso!', tourId: (rows as any).insertId })
    } catch (error) {
        res.status(500).json({ message: 'Erro ao agendar o tour', error })
    }
}
