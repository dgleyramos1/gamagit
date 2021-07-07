import React, { useEffect, useState } from 'react';
import * as S from './styled';


export default function Repositories() {
    const [ repositories, setRepoitories ] = useState([]);


    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        setRepoitories(repositoriesName);
        localStorage.clear();
    }, []);

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                { repositories.map(repository => {
                    return (
                        <S.ListItem>Repositório: { repository }</S.ListItem>
                    )
                })}
            </S.List>
        </S.Container>
    );
}


