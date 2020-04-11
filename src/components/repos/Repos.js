import React, {useContext} from 'react'
import PropTypes from 'prop-types';
import Repoitem from './Repoitem'; 
import GithubContext from '../../context/github/githubContext';


const Repos = () => {

    const githubContext = useContext(GithubContext);

    return githubContext.repos.map(repo => <Repoitem repo={repo} key={repo.id} />);
};

export default Repos;