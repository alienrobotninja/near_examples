import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { utils } from "near-api-js";
import MakeDonation from "./MakeDonations";
import { Card, Button, Col, Badge, Stack } from "react-bootstrap";
import { parseNearAmount } from "near-api-js/lib/utils/format";
import { NotificationSuccess, NotificationError } from "../utils/Notifications";
import {
    getProjects as getProjectList,
    donateToProject,
    deleteProject,
} from "../../utils/donations";

const Project = ({ project }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    const account = window.walletConnection.account();

    const deleteProject = async (projectId) => {
        console.log(projectId);
        try {
            setLoading(true);
            await deleteProject({
                id: projectId
            }).then((resp) => getProjects());
            toast(<NotificationSuccess text="Project deleted successfully." />);
        } catch (error) {
            console.log({ error });
            toast(<NotificationError text="Failed to delete project ." />);
        } finally {
            setLoading(false);
        }
    }

    const getProjects = useCallback(async () => {
        try {
            setLoading(true);
            setProjects(await getProjectList());
        } catch (error) {
            console.log({ error });
        } finally {
            setLoading(false);
        }
    });

    const { id, goal, name, purpose, raised, location, image, owner, donations, highest, donors } =
        project;


    const makeDonation = async (data) => {
        try {
            setLoading(true);
            await donateToProject({
                id: data.id,
                donation: (data.donation + ""),

            }).then((resp) => getProjects());
            toast(<NotificationSuccess text="Project created successfully." />);
        } catch (error) {
            console.log({ error });
            toast(<NotificationError text="Failed to make a donation to project." />);
        } finally {
            setLoading(false);
        }
    };



    return (
        <Col key={id}>
            <Card className=" h-100">
                <Card.Header>
                    <Stack direction="horizontal" gap={2}>
                        <span className="font-monospace text-secondary">{owner}</span>
                        <Badge bg="secondary" className="ms-auto">
                            Goal: {utils.format.formatNearAmount(goal, 2)} Near | Raised: {utils.format.formatNearAmount(raised, 2)} Near
                        </Badge>
                    </Stack>
                </Card.Header>
                <div className=" ratio ratio-4x3">
                    <img src={image} alt={name} style={{ objectFit: "cover" }} />
                </div>
                <Card.Body className="d-flex  flex-column text-center">
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{donations} Donation(s) | Highest Donation: {utils.format.formatNearAmount(highest)} Near</Card.Subtitle>
                    <Card.Text>Last Donor: {donors[donors.length - 1]}</Card.Text>
                    <Card.Text className="flex-grow-1 ">{purpose}</Card.Text>
                    <Card.Text className="text-secondary">
                        <span>{location}</span>
                    </Card.Text>
                    <Button
                        variant="outline-dark"
                        className="w-100 py-3"
                    >
                        Make Donation <MakeDonation save={makeDonation} id={id}/>
                    </Button>
                    <button style={owner === account.accountId ? {} : { display: 'none' }} className="btn btn-danger" onClick={() => deleteProject(id)}>Delete</button>

                </Card.Body>
            </Card>
        </Col>
    );
};

Project.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
    buy: PropTypes.func.isRequired,
};

export default Project;