
export interface Card {
    skill: string,
    overALLRating: number,
    subSkills: SubSkill[],
    useCase: UseCase[]
}

export interface SubSkill {
    skill: string,
    rating: number,
    useCase: UseCase[]
}

export interface UseCase {
    useCase: string,
    impl   : string
}
