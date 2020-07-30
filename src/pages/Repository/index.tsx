import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Header, RepositoryInfo } from './styles';
import githubLogo from '../../assets/github_logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={githubLogo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/69631?s=200&v=4"
            alt="Facebook"
          />
          <div>
            <strong>facebook/react</strong>
            <p>descrição</p>
          </div>
        </header>
        <ul />
      </RepositoryInfo>
    </>
  );
};

export default Repository;
