export interface FeedbackCreateData {
    type: string
    comment: string
    screenshot?: string
}    

export interface FeedbacksRepository {
    create: (data: FeedbackCreateData) => Promise<void>

}

/* esse arquivo diz para a aplicação o que pode fazer no banco de dados */