import { v4 as uuid4 } from "uuid";
import { parseNearAmount } from "near-api-js/lib/utils/format";

const GAS = 100000000000000;

export function createProject(project) {
    project.id = uuid4();
    project.price = parseNearAmount(project.price + "");
    return window.contract.setProject({ project });
}

export function getProjects() {
    return window.contract.getProjects();
}

export async function donateToProject({ id, donation }) {
    parseNearAmount(donation + "");
    await window.contract.donateToProject({ projectId: id }, GAS, donation);
}

export function getOngoingProjectCount() {
    return window.contract.getOngoingProjectCount();
}

export function donateToAllProjects({ amount }) {
    console.log("value passed", amount.toString());
    const figure = amount + "000000000000000000000000";
    parseNearAmount(figure + "");
    return window.contract.donateToAll({ projectId: figure }, GAS, figure);
}

export function deleteProject({ id }) {
    return window.contract.deleteProject({ projectId: id }, GAS);
}
