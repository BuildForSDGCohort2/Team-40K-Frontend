import React from 'react';
import { GoReport } from 'react-icons/go';
import { GrLike } from 'react-icons/gr';
import { BiRepost } from 'react-icons/bi';
import { FaRegComments } from 'react-icons/fa';

const TrekInteractions = ({ trek }) => {
  return (
        <div className="trek-interactions w-100 mt-3">
            <div className="tags left">
                {trek.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                ))}
            </div>
            <div className="interactions left mt-2">
                <div className="center interaction">
                    <span className="amount">{trek.likes.length}</span>
                    <span className="icon"><GrLike /></span>
                </div>
                <div className="center interaction ">
                    <span className="amount">{trek.comments.length}</span>
                    <span className="icon"><FaRegComments/></span>
                </div>
                <div className="center interaction ">
                    <span className="amount">{trek.reposts.length}</span>
                    <span className="icon"><BiRepost/></span>
                </div>
                <div className="center interaction ">
                    <span className="icon"><GoReport /></span>
                </div>
            </div>
        </div>
  );
};

export default TrekInteractions;
